import type * as ThreeNs from 'three'

type Three = typeof ThreeNs

const MODEL_URL = '/models/lee.glb'
const DRACO_PATH = '/draco/'
const IDLE_CLIP = 'Walking'
const REACT_CLIP = 'Running'
const REACT_SECONDS = 2.2

export type HeroCharacterHandle = {
  dispose: () => void
}

export async function mountHeroCharacter(
  host: HTMLElement,
  onReady: () => void
): Promise<HeroCharacterHandle | null> {
  const [THREE, { GLTFLoader }, { DRACOLoader }] = await Promise.all([
    import('three'),
    import('three/examples/jsm/loaders/GLTFLoader.js'),
    import('three/examples/jsm/loaders/DRACOLoader.js')
  ])

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'low-power'
  })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.05
  renderer.domElement.className = 'hero-3d-canvas'
  host.appendChild(renderer.domElement)

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 50)
  camera.position.set(0, 0.95, 3.4)
  camera.lookAt(0, 0.9, 0)

  scene.add(new THREE.HemisphereLight(0xfff4d6, 0x2a2440, 1.6))
  const key = new THREE.DirectionalLight(0xffffff, 1.8)
  key.position.set(2.5, 4, 3)
  scene.add(key)
  const rim = new THREE.DirectionalLight(0xf3d463, 1.2)
  rim.position.set(-3, 2, -2)
  scene.add(rim)

  const loader = new GLTFLoader()
  const draco = new DRACOLoader()
  draco.setDecoderPath(DRACO_PATH)
  loader.setDRACOLoader(draco)

  const gltf = await loader.loadAsync(MODEL_URL)
  const root = gltf.scene
  root.traverse((o) => {
    const mesh = o as ThreeNs.Mesh
    if (mesh.isMesh) mesh.frustumCulled = false
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
  if (idleAction) {
    idleAction.timeScale = 0.75
    idleAction.play()
  }

  let reactUntil = 0
  const playReaction = () => {
    if (!reactAction || !idleAction) return
    reactUntil = performance.now() + REACT_SECONDS * 1000
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
    renderer.render(scene, camera)
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
      draco.dispose()
      renderer.dispose()
      renderer.domElement.remove()
    }
  }
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
