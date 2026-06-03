export default defineNuxtPlugin(() => {
  const router = useRouter()

  function scrollToHash(hash: string) {
    if (!hash.startsWith('#')) return
    requestAnimationFrame(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  router.isReady().then(() => {
    const hash = router.currentRoute.value.hash
    if (hash) scrollToHash(hash)
  })

  router.afterEach((to) => {
    if (to.hash) scrollToHash(to.hash)
  })
})
