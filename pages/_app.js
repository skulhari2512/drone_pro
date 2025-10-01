import '../styles/globals.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

import { Toaster } from '../components/ui/toaster'

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <Header />
      {getLayout(<Component {...pageProps} />)}
      <Footer />
      <Toaster />
    </>
  )
}
export default MyApp
