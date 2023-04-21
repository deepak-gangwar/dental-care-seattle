import '@/styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '@/component/Navbar'
import Loader from '@/component/Loader'
import SVGSpritesheet from '@/component/svgSpritesheet'
import Lenis from '@studio-freight/lenis'
import Footer from '@/component/footer'
gsap.registerPlugin(ScrollTrigger)


export default function App({ Component, pageProps }) {
  const router = useRouter()

  // SMOOTH SCROLL
  // =============
  // Issues
  // - Sometimes the scroll is automatically jumping
  // - Lenis is not allowing to grab scroll thumb while scrolling
  // - No keyboard or drag controls

  useEffect(() => {
    const lenis = new Lenis({
      // wrapper: document.getElementById('main-w'),
      // content: document.getElementById('main'),
      lerp: 0.09,
      // duration: 1.5,
      wheelMultiplier: 0.6
    })
    // lenis.on('scroll', (e) => {
    //   console.log(e)
    // })

    // this works for slideout footer but is making normal scroll janky
    // lenis.on('scroll', ({ progress }) => {
    // const footerWrapper = document.querySelector('footer')
    // footerWrapper.style.transform = `translate3d(0, -${(1 - progress) * 3600}px, 0)`
    // })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])


  // SCROLL TRIGGER FOR FOOTER CURVE
  // ================  

  useEffect(() => {
    const paths = [...document.querySelectorAll('path.path-anim')];
    paths.forEach(el => {
      const svgEl = el.closest('svg');
      const pathTo = el.dataset.pathTo;

      gsap.timeline({
        scrollTrigger: {
          trigger: svgEl,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })
        .to(el, {
          ease: 'none',
          attr: { d: pathTo }
        });
    });
  }, [])


  // FOOTER SCRUB SLIDE-OUT ANIMATION
  // ================================

  useEffect(() => {
    let triggerElement = document.querySelector('footer');
    let targetElementRound = document.querySelector('footer')

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "0% 100%",
        end: "100% 100%",
        scrub: 0
      }
    });
    tl.from(targetElementRound, {
      transform: `translate3d(0, -30%, 0)`,
      ease: "none"
    }, 0)
  })


  // PAGE TRANTISIONS
  // ================

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


  // RENDERING
  // =========

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
      {/* <Footer /> */}
      <div id='sail'></div>
    </div>
  )
}
