import { animate, createTimeline, onScroll, stagger } from 'animejs'

let started = false

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function markAnimated(el: Element) {
  el.classList.add('is-animated')
}

function setupHero() {
  const copyChildren = document.querySelectorAll('.bw-hero__copy > *')
  const mockup = document.querySelector('.bw-hero .bw-mockup')

  const timeline = createTimeline({ defaults: { ease: 'outQuad', duration: 550 } })
    .add(copyChildren, {
      opacity: [0, 1],
      y: [12, 0],
      delay: stagger(70),
    })
    .add(
      mockup,
      {
        opacity: [0, 1],
        y: [16, 0],
      },
      '-=350',
    )

  timeline.then(() => {
    copyChildren.forEach(markAnimated)
    if (mockup) markAnimated(mockup)
  })
}

function setupReveals() {
  document.querySelectorAll('[data-animate~="reveal"]').forEach((el) => {
    const target = el as HTMLElement
    const delay = Number(target.dataset.animateDelay ?? 0)

    animate(target, {
      opacity: [0, 1],
      y: [18, 0],
      duration: 500,
      delay,
      ease: 'outQuad',
      autoplay: onScroll({ target, repeat: false }),
      onComplete: () => markAnimated(target),
    })
  })
}

function setupHoverCards() {
  if (!window.matchMedia('(hover: hover)').matches) return

  document.querySelectorAll('[data-animate~="hover"]').forEach((el) => {
    const target = el as HTMLElement

    target.addEventListener('mouseenter', () => {
      animate(target, { y: -2, duration: 180, ease: 'outQuad' })
    })
    target.addEventListener('mouseleave', () => {
      animate(target, { y: 0, duration: 180, ease: 'outQuad' })
    })
  })
}

function setupPressButtons() {
  document.querySelectorAll('[data-animate="press"]').forEach((el) => {
    const target = el as HTMLElement
    const reset = () => animate(target, { scale: 1, duration: 150, ease: 'outQuad' })

    target.addEventListener('mousedown', () => {
      animate(target, { scale: 0.98, duration: 100, ease: 'outQuad' })
    })
    target.addEventListener('mouseup', reset)
    target.addEventListener('mouseleave', reset)
  })
}

function initLandingAnime() {
  if (prefersReducedMotion()) {
    document.querySelectorAll('[data-animate]').forEach(markAnimated)
    document.querySelectorAll('.bw-hero__copy > *, .bw-hero .bw-mockup').forEach(markAnimated)
    return
  }

  setupHero()
  setupReveals()
  setupHoverCards()
  setupPressButtons()
}

export function useLandingAnime() {
  onMounted(() => {
    if (!import.meta.client || started) return
    started = true

    nextTick(() => {
      initLandingAnime()
    })
  })
}
