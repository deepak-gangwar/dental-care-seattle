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

    const handleLinkClick = (event) => {
      // play page exit and mutation animaitons
      // change routes
      // play mutation and page entry animaitons
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      tl.add("leave")
      tl.to(sail, { duration: 1.5, transform: "translate3d(0px, 0px, 0px)", ease: "circ.inOut" }, "leave");
      const page = document.querySelector('.page')
      tl.to(page, { duration: 1.5, transform: "translateY(-70px)", ease: "power2.inOut" }, "leave")
      tl.call(() => router.push(href))
    };

    const sailExitAnim = () => {
      tl.add("label1")
      tl.to(sail, { duration: 1.5, transform: "translate3d(0px, -100%, 0px)", ease: "circ.inOut" }, "label1");
      const page = document.querySelector('.page')
      tl.from(page, { duration: 1.5, transform: "translateY(70px)", ease: "power2.inOut" }, "label1")
      tl.to(sail, { duration: 0, transform: "translate3d(0px, 101%, 0px)" });
    };
    router.events.on('routeChangeComplete', sailExitAnim);

    // modify this to be links with class page_tr
    const nav = document.getElementById('nav')
    const links = nav.querySelectorAll('a');
    links.forEach((link) => {
      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleLinkClick);
      });
      router.events.off('routeChangeComplete', sailExitAnim);
    };
  }, [router]);

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
