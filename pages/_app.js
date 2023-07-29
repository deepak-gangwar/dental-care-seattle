import '@/styles/globals.css'
import { useEffect, useLayoutEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from "@/component/split-text"
import Navbar from '@/component/Navbar'
import Loader from '@/component/Loader'
import SVGSpritesheet from '@/component/svgSpritesheet'
import Lenis from '@studio-freight/lenis'
import * as gtag from "@/component/gtag"

gsap.registerPlugin(ScrollTrigger, SplitText)
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

export default function App({ Component, pageProps }) {
  const router = useRouter()

  // GOOGLE ANALYTICS
  // ================

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }

    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])


  // SMOOTH SCROLL
  // =============

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.09,
      wheelMultiplier: 0.6,
      smoothWheel: true,
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
      ScrollTrigger.update()
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // This is to fix the problem that lenis does not start from top of the page on route change
    // I don't know why this useEffect is not createing a new instance of lenis on every page.
    // Instead this useEffect is running only on first load of the page. 
    // When I added router as a dependency, now we are creating a new instance of lenis on every page
    // Earlier I had an empty dependency array, (which should also have worked, but didn't).

    router.events.on('routeChangeStart', () => {
      lenis.scrollTo(0, { immediate: true })
    })

    return () => {
      lenis.destroy()

      router.events.off('routeChangeStart', () => {
        lenis.scrollTo(0, { immediate: true })
      })
    }
  }, [router])


  // SCROLL TRIGGER FOR FOOTER CURVE
  // ===============================

  // useLayoutEffect(() => {
  //   const paths = [...document.querySelectorAll('path.path-anim')];

  //   gsap.context(() => {
  //     paths.forEach(el => {
  //       const svgEl = el.closest('svg');
  //       const pathTo = el.dataset.pathTo;

  //       gsap.timeline({
  //         scrollTrigger: {
  //           trigger: svgEl,
  //           start: "top bottom",
  //           end: "bottom top",
  //           scrub: true
  //         }
  //       })
  //         .to(el, {
  //           ease: 'none',
  //           attr: { d: pathTo }
  //         });
  //     });
  //   })
  // }, [router.asPath])

  // =================================================================
  // 
  // NOTE: ScrollTrigger animations were not working when page is 
  // first loaded, it starts working when I refresh the page.
  // To solve this issue, I have used the useLayoutEffect and 
  // gsap.context() Hope this solves the issue. See below
  // https://greensock.com/forums/topic/30872-gsap-nextjs-react-scrolltrigger-dissappears-stops-working/
  // 
  // =================================================================

  // useEffect(() => {
  //   const paths = [...document.querySelectorAll('path.path-anim')];
  //   paths.forEach(el => {
  //     const svgEl = el.closest('svg');
  //     const pathTo = el.dataset.pathTo;

  //     gsap.timeline({
  //       scrollTrigger: {
  //         trigger: svgEl,
  //         start: "top bottom",
  //         end: "bottom top",
  //         scrub: true
  //       }
  //     })
  //       .to(el, {
  //         ease: 'none',
  //         attr: { d: pathTo }
  //       });
  //   });
  // }, [])


  // FOOTER SCRUB SLIDE-OUT ANIMATION
  // ================================

  // useEffect(() => {
  //   let triggerElement = document.querySelector('footer');
  //   let targetElementRound = document.querySelector('footer')

  // if (router.pathname === "/") {
  // }

  // `if` to remove GSAP console issues when footer is not found
  // if (targetElementRound) {
  //   let tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: triggerElement,
  //       start: "0% 100%",
  //       end: "100% 100%",
  //       scrub: 0
  //     }
  //   });
  //   tl.from(targetElementRound, {
  //     transform: `translate3d(0, -30%, 0)`,
  //     ease: "none"
  //   }, 0)
  // }
  // })


  // PAGE TRANTISION LOGIC
  // =====================

  function createSplits() {
    new SplitText('[data-split="hero-title"]', { type: "chars" })
    if (document.documentElement.clientWidth > 480) {
      new SplitText('.js-split', { type: "lines", linesClass: "s_line" })
      new SplitText('.s_line', { type: "char", wordsClass: "s_word" })
    }
  }

  function createHeroAnim(onComplete = null) {

    // the problem here is that every time on page navigation, I am
    // creating a new timeline. That is why we use refs I guess.

    const tl = gsap.timeline({
      force3D: true,
      defaults: {
        duration: 1.5,
        ease: 'power3.inOut',
      },
      onComplete: onComplete
    })

    // ------------------------------------------------------------------
    // Anything in the defaults object of a timeline gets inherited by 
    // its child animations when they get created, so if you find yourself 
    // setting the same ease or duration(or any value) over and over again, 
    // this can help make your code more concise.
    // ------------------------------------------------------------------

    // NOTE: heroLine.children returns a nodelist and not an array
    // A nodelist is not iterable. To make it so, we use Array.from()

    const heroLines = document.querySelectorAll('[data-split="hero-title"]')

    heroLines.forEach(heroLine => {
      let letters = Array.from(heroLine.children) // <- letters of each line
      letters.forEach((letter, i) => {
        tl.fromTo(letter, {
          yPercent: 100,
          rotateX: 110,
        }, {
          yPercent: 0,
          rotateX: 0,
          duration: 1.5 + i / 15,
          // duration: 1.5 + i / 10 + i * 0.02,
          // delay: n
        }, 0)

        // tl.from(letter, {
        //   yPercent: 100,
        //   rotateX: 110,
        //   duration: 1.5 + i / 15,
        //   // duration: 1.5 + i / 10 + i * 0.02,
        //   // delay: n
        // }, 0)
      })
    })

    // ---------------------------------------------------------------------------------------
    // NOTE: TWEENS IN THIS FUNCTION WERE CONVERTED TO FROMTO   ------------------------------
    // EVEN WHEN THEY DON'T NEED TO BE, IN AN ATTEMPT TO SOLVE  ------------------------------
    // THE ISSUE THAT THEY STOPPED AT 99.4% IN REACT 18 ISSUE   ------------------------------
    // ---------------------------------------------------------------------------------------

    tl.to('.fouc-overlay', { opacity: 0, display: 'none', duration: 0 }, 0) // <- to avoid FOUC
    // tl.call(() => { document.querySelector('.fouc-overlay').remove() })
    // tl.from('.arrow-icon', { y: "-100%", x: "-100%" }, 0.3)
    // tl.from('.js-hero-line', { scaleX: 0 }, 1.2)

    tl.fromTo('.arrow-icon', { y: "-100%", x: "-100%" }, { y: 0, x: 0 }, 0.3)
    tl.fromTo('.js-hero-line', { scaleX: 0 }, { scaleX: 1 }, 1.2)
    return tl
  }

  // This one runs on first load and every subsequent page transition
  useEffect(() => {
    let pageOut, pageIn
    const links = document.querySelectorAll('.js-pt')

    let context = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          duration: 1.2,
          ease: "power2.inOut"
        }
      })

      // PAGE TRANSITION EXIT ANIMATION ✨
      // ================================

      pageOut = (event) => {
        event.preventDefault()

        // Dont' run the transition animation if we are on the same page
        let href = event.currentTarget.getAttribute('href')
        if (router.pathname !== href) {
          tl.to('#sail', { transform: "translate3d(0px, 0px, 0px)", ease: "power3.inOut" }, 0)
            .to('.page', { transform: "translateY(-70px)" }, 0)
            .to('.js-nav-item', { duration: 1, transform: "translateY(-150%)" }, 0)
            .call(() => router.push(href))
        }
      }

      // PAGE TRANSITION ENTRY ANIMATION ✨
      // ==================================
      // Callback for when navigating to different route is done

      pageIn = () => {
        // Prevent clicking until animation is complete
        links.forEach(link => { link.style.pointerEvents = 'none' })

        tl.add("mutA")
          .to('#sail', { transform: "translate3d(0px, -100%, 0px)", ease: "power3.inOut" }, "mutA")
          .from('.page', { transform: "translateY(70px)" }, "mutA")
          .to('#sail', { duration: 0, transform: "translate3d(0px, 101%, 0px)" })
          .fromTo('.js-nav-item', { transform: "translateY(130%)" }, { transform: "translateY(0%)", stagger: 0.1, delay: 0.5 }, "mutA")
          .add(() => {
            links.forEach(link => {
              link.style.pointerEvents = 'all'
              link.addEventListener('click', pageOut)
            })
          }, 2.8) // <- max time to complete hero animations

        if (!document.querySelector('#services.page')) {
          createSplits()
          createHeroAnim()
        }
      }
    })

    // Add listeners to links on first load
    links.forEach(link => link.addEventListener('click', pageOut))
    router.events.on('routeChangeComplete', pageIn)

    return () => {
      context.revert()
      links.forEach(link => link.removeEventListener('click', pageOut))
      router.events.off('routeChangeComplete', pageIn)
    }
  }, [router])


  // GSAP ANIMATIONS ON FIRST LOAD
  // =============================

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (!document.querySelector('#services.page')) {
        createSplits()
        createHeroAnim()
      }
    })

    return () => ctx.revert() // <- animation cleanup!
  }, [])


  // RENDERING
  // =========

  return (
    <>
      {/* --------------- Global Site Tag (gtag.js) - Google Analytics  ---------------*/}

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />


      {/* --------------------------- MAIN APP --------------------------- */}

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
    </>
  )
}
