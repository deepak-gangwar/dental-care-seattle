import '@/styles/globals.css'
import Navbar from '@/component/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <div id='app'>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}
