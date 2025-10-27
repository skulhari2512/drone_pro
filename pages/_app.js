// pages/_app.js
import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Header from '../components/layout/Header'
import { Toaster } from '../components/ui/toaster'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import VoiceflowChat from '../components/VoiceflowChat' // ADD THIS

// Lazy load Footer
const Footer = dynamic(() => import('../components/layout/Footer'), {
  ssr: true,
  loading: () => <div className="h-80 bg-slate-900" />
})

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('config', 'G-PB40LHNC8J', { page_path: url })
      }
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])

  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <DefaultSeo {...SEO} />
      <Header />
      <main className="min-h-screen">
        {getLayout(<Component {...pageProps} />)}
      </main>
      <Footer />
      <VoiceflowChat /> {/* ADD THIS */}
      <Toaster />
      <SpeedInsights />
    </>
  )
}

export default MyApp