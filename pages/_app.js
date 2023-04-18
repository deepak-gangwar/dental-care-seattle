import '@/styles/globals.css'
import Navbar from '@/component/Navbar'
import Loader from '@/component/Loader'
import SVGSpritesheet from '@/component/svgSpritesheet'

export default function App({ Component, pageProps }) {
  return (
    <div id='app'>
      {/* See if there is any way to load this spritesheet at the bottom */}
      <SVGSpritesheet />
      <Loader />
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}
