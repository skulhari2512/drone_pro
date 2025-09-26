import '../styles/globals.css'
import { Toaster } from '../components/ui/toaster'

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      {getLayout(<Component {...pageProps} />)}
      <Toaster />
    </>
  )
}

export default MyApp