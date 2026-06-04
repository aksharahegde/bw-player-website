import { landingFeatures, landingSeo } from '~/content/landing'

export function useLandingSeo() {
  const config = useRuntimeConfig()
  const siteUrl = computed(() => {
    const url = config.public.siteUrl as string
    return url.endsWith('/') ? url.slice(0, -1) : url
  })

  const featureList = landingFeatures
    .filter((f) => f.id !== 'design')
    .map((f) => f.title)

  const downloadUrls = computed(() => {
    const urls = [
      config.public.androidStoreUrl,
      config.public.iosStoreUrl,
      config.public.macStoreUrl,
    ].filter((url): url is string => typeof url === 'string' && url.length > 0)
    return urls
  })

  const ids = computed(() => ({
    organization: `${siteUrl.value}/#organization`,
    website: `${siteUrl.value}/#website`,
    webpage: `${siteUrl.value}/#webpage`,
    software: `${siteUrl.value}/#software`,
  }))

  return {
    seo: landingSeo,
    siteUrl,
    featureList,
    downloadUrls,
    ids,
    themeColor: '#000000',
    twitterSite: computed(() => config.public.twitterSite as string),
  }
}
