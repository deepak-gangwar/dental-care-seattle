import '@/styles/globals.css'
import Navbar from '@/component/Navbar'
import Loader from '@/component/Loader'

export default function App({ Component, pageProps }) {
  return (
    <div id='app'>
      <Loader />
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}
