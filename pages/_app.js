import '@/styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { gsap } from 'gsap'
import Navbar from '@/component/Navbar'
import Loader from '@/component/Loader'
import SVGSpritesheet from '@/component/svgSpritesheet'


export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const sail = document.getElementById('sail')
    const tl = new gsap.timeline()

    // play page exit and mutation animaitons
    // lock scrolling as well as click events while isMutating = true
    // change routes
    // play mutation and page entry animaitons

    // mutA for when link is clicked, also add pageA for items like nav links
    const pageOut = (event) => {
      event.preventDefault()
      const href = event.currentTarget.getAttribute('href')
      const page = document.querySelector('.page')

      tl.to(sail, { duration: 1.5, transform: "translate3d(0px, 0px, 0px)", ease: "circ.inOut" }, 0)
      tl.to(page, { duration: 1.5, transform: "translateY(-70px)", ease: "power2.inOut" }, 0)
      tl.call(() => router.push(href))
    };

    // Callback for when navigating to different route is done
    const pageIn = () => {
      const page = document.querySelector('.page')
      tl.add("mutA")
      tl.to(sail, { duration: 1.5, transform: "translate3d(0px, -100%, 0px)", ease: "circ.inOut" }, "mutA")
      tl.from(page, { duration: 1.5, transform: "translateY(70px)", ease: "power2.inOut" }, "mutA")
      tl.to(sail, { duration: 0, transform: "translate3d(0px, 101%, 0px)" });
    };
    router.events.on('routeChangeComplete', pageIn);

    // modify this to be links with class page_tr
    const nav = document.getElementById('nav')
    const links = nav.querySelectorAll('a')
    links.forEach((link) => {
      link.addEventListener('click', pageOut)
    });

    return () => {
      router.events.off('routeChangeComplete', pageIn)
      links.forEach((link) => {
        link.removeEventListener('click', pageOut)
      })
    }
  }, [router])

  return (
    <div id='app'>
      {/* See if there is any way to load this spritesheet at the bottom */}
      <SVGSpritesheet />
      <Loader />
      <Navbar />

      <div id='main-w'>
        <main id='main'>
          <Component {...pageProps} />
        </main>
      </div>

      <div id='sail'></div>
    </div>
  )
}
