import '@/styles/globals.css'
import Nav from '@/component/nav'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <Component {...pageProps} />
    </div>
  )
}
