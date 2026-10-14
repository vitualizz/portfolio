import type { gsap as GsapType } from 'gsap'
import type { ScrollTrigger as ScrollTriggerType } from 'gsap/ScrollTrigger'
import type { Flip as FlipType } from 'gsap/Flip'

export type Motion = {
  gsap: typeof GsapType
  ScrollTrigger: typeof ScrollTriggerType
  Flip: typeof FlipType
}

let pending: Promise<Motion | null> | null = null

export const motionAllowed = () =>
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function loadMotion(): Promise<Motion | null> {
  if (!motionAllowed()) return Promise.resolve(null)
  if (pending) return pending
  pending = Promise.all([
    import('gsap'),
    import('gsap/ScrollTrigger'),
    import('gsap/Flip')
  ]).then(([core, st, flip]) => {
    const gsap = core.gsap
    gsap.registerPlugin(st.ScrollTrigger, flip.Flip)
    document.addEventListener('astro:after-swap', () =>
      st.ScrollTrigger.getAll().forEach((t) => t.kill())
    )
    document.addEventListener('astro:page-load', () =>
      st.ScrollTrigger.refresh()
    )
    return { gsap, ScrollTrigger: st.ScrollTrigger, Flip: flip.Flip }
  })
  return pending
}

export function whenIdle(fn: () => void) {
  if ('requestIdleCallback' in window)
    (
      window as Window & { requestIdleCallback: (cb: () => void) => void }
    ).requestIdleCallback(fn)
  else window.setTimeout(fn, 200)
}
