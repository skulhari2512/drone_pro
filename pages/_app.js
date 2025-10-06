import '../styles/globals.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { Toaster } from '../components/ui/toaster'
import { SpeedInsights } from '@vercel/speed-insights/next'

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <Header />
      {getLayout(<Component {...pageProps} />)}
      <Footer />
      <Toaster />
      <SpeedInsights />
    </>
  )
}

export default MyApp