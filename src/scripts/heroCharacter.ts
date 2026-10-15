import type * as ThreeNs from 'three'

type Three = typeof ThreeNs

const MODEL_URL = '/models/lee.glb'
const DRACO_PATH = '/draco/'
const IDLE_CLIP = 'Idle_11'
const REACT_CLIP = 'Big_Wave_Hello'
const OUTLINE_COLOR = 0x14110d
const TOON_STEPS = [0.35, 0.62, 0.86, 1]

export type HeroCharacterHandle = {
  dispose: () => void
}

export async function mountHeroCharacter(
  host: HTMLElement,
  onReady: () => void
): Promise<HeroCharacterHandle | null> {
  const [THREE, { GLTFLoader }, { DRACOLoader }, { OutlineEffect }] =
    await Promise.all([
      import('three'),
      import('three/examples/jsm/loaders/GLTFLoader.js'),
      import('three/examples/jsm/loaders/DRACOLoader.js'),
      import('three/examples/jsm/effects/OutlineEffect.js')
    ])

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'low-power'
  })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.domElement.className = 'hero-3d-canvas'
  host.appendChild(renderer.domElement)
  const outline = new OutlineEffect(renderer, {
    defaultThickness: 0.0035,
    defaultColor: new THREE.Color(OUTLINE_COLOR).toArray(),
    defaultAlpha: 1
  })

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 50)
  camera.position.set(0, 0.95, 3.4)
  camera.lookAt(0, 0.9, 0)

  scene.add(new THREE.HemisphereLight(0xfff6e0, 0x3a3048, 1.1))
  const key = new THREE.DirectionalLight(0xffffff, 2.2)
  key.position.set(2.5, 4, 3)
  scene.add(key)

  const loader = new GLTFLoader()
  const draco = new DRACOLoader()
  draco.setDecoderPath(DRACO_PATH)
  loader.setDRACOLoader(draco)

  const gltf = await loader.loadAsync(MODEL_URL)
  const root = gltf.scene
  const gradient = makeGradientMap(THREE)
  const disposables: Array<{ dispose: () => void }> = [gradient]
  root.traverse((o) => {
    const mesh = o as ThreeNs.Mesh
    if (!mesh.isMesh) return
    mesh.frustumCulled = false
    const source = mesh.material as ThreeNs.MeshStandardMaterial
    const toon = new THREE.MeshToonMaterial({
      map: source.map,
      color: source.color,
      gradientMap: gradient
    })
    source.dispose()
    mesh.material = toon
    disposables.push(mesh.geometry, toon)
    if (source.map) disposables.push(source.map)
  })
  centerOnFloor(THREE, root)
  root.position.x -= 0.12
  scene.add(root)

  const head = root.getObjectByName('mixamorigHead') as ThreeNs.Bone | undefined
  const neck = root.getObjectByName('mixamorigNeck') as ThreeNs.Bone | undefined

  const mixer = new THREE.AnimationMixer(root)
  const idle = findClip(THREE, gltf.animations, IDLE_CLIP)
  const react = findClip(THREE, gltf.animations, REACT_CLIP)
  const idleAction = idle ? mixer.clipAction(stripRootMotion(idle)) : null
  const reactAction = react ? mixer.clipAction(stripRootMotion(react)) : null
  idleAction?.play()

  let reactUntil = 0
  const playReaction = () => {
    if (!reactAction || !idleAction) return
    reactUntil = performance.now() + (react?.duration ?? 2) * 1000 - 350
    reactAction.reset().setEffectiveWeight(1).fadeIn(0.25).play()
    idleAction.fadeOut(0.25)
  }
  const endReaction = () => {
    if (!reactAction || !idleAction) return
    idleAction.reset().setEffectiveWeight(1).fadeIn(0.35).play()
    reactAction.fadeOut(0.35)
    reactUntil = 0
  }
  host.addEventListener('click', playReaction)

  const look = { x: 0, y: 0 }
  const target = { x: 0, y: 0 }
  const onPointer = (e: PointerEvent) => {
    const r = host.getBoundingClientRect()
    const cx = r.left + r.width / 2
    const cy = r.top + r.height * 0.3
    target.x = clamp((e.clientX - cx) / window.innerWidth, -0.5, 0.5)
    target.y = clamp((e.clientY - cy) / window.innerHeight, -0.5, 0.5)
  }
  window.addEventListener('pointermove', onPointer, { passive: true })

  const resize = () => {
    const { width, height } = host.getBoundingClientRect()
    if (!width || !height) return
    renderer.setSize(width, height, false)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
  }
  resize()
  const ro = new ResizeObserver(resize)
  ro.observe(host)

  let visible = true
  const io = new IntersectionObserver(
    (entries) => {
      visible = entries.some((e) => e.isIntersecting)
    },
    { threshold: 0.05 }
  )
  io.observe(host)

  const clock = new THREE.Clock()
  let frame = 0
  const tick = () => {
    frame = requestAnimationFrame(tick)
    if (!visible || document.hidden) return
    const dt = Math.min(clock.getDelta(), 0.05)
    if (reactUntil && performance.now() > reactUntil) endReaction()
    mixer.update(dt)
    look.x += (target.x - look.x) * 0.08
    look.y += (target.y - look.y) * 0.08
    if (head) {
      head.rotation.y += look.x * 0.9
      head.rotation.x += look.y * 0.5
    }
    if (neck) {
      neck.rotation.y += look.x * 0.35
      neck.rotation.x += look.y * 0.2
    }
    root.rotation.y = look.x * 0.25
    outline.render(scene, camera)
  }
  tick()
  onReady()

  return {
    dispose: () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onPointer)
      host.removeEventListener('click', playReaction)
      ro.disconnect()
      io.disconnect()
      mixer.stopAllAction()
      disposables.forEach((d) => d.dispose())
      draco.dispose()
      renderer.dispose()
      renderer.domElement.remove()
    }
  }
}

function makeGradientMap(THREE: Three) {
  const data = new Uint8Array(TOON_STEPS.map((v) => Math.round(v * 255)))
  const texture = new THREE.DataTexture(
    data,
    TOON_STEPS.length,
    1,
    THREE.RedFormat
  )
  texture.minFilter = THREE.NearestFilter
  texture.magFilter = THREE.NearestFilter
  texture.needsUpdate = true
  return texture
}

function centerOnFloor(THREE: Three, root: ThreeNs.Object3D) {
  const box = new THREE.Box3().setFromObject(root)
  const center = box.getCenter(new THREE.Vector3())
  root.position.x -= center.x
  root.position.z -= center.z
  root.position.y -= box.min.y
}

function findClip(THREE: Three, clips: ThreeNs.AnimationClip[], name: string) {
  return THREE.AnimationClip.findByName(clips, name) ?? clips[0] ?? null
}

function stripRootMotion(clip: ThreeNs.AnimationClip) {
  clip.tracks = clip.tracks.filter((t) => !/Hips\.position$/.test(t.name))
  return clip
}

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v))
}
