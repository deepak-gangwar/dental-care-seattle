import '@/styles/globals.css'
import { useEffect, useLayoutEffect } from 'react'
import { useRouter } from 'next/router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from "@/component/split-text"
import Navbar from '@/component/Navbar'
import Loader from '@/component/Loader'
import SVGSpritesheet from '@/component/svgSpritesheet'
import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(ScrollTrigger, SplitText)
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

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
      ScrollTrigger.update()
      requestAnimationFrame(raf)
    }

    // lenis.on('scroll', ScrollTrigger.update)
    requestAnimationFrame(raf)
  }, [])


  // SCROLL TRIGGER FOR FOOTER CURVE
  // ================  

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

  useEffect(() => {
    let triggerElement = document.querySelector('footer');
    let targetElementRound = document.querySelector('footer')

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
  })


  // PAGE TRANTISIONS
  // ================

  useEffect(() => {
    const sail = document.getElementById('sail')
    const tl = new gsap.timeline()

    // mutA for when link is clicked, also add pageA for items like nav links
    const pageOut = (event) => {
      event.preventDefault()

      // Dont' run the transition animation if we are on the same page
      const href = event.currentTarget.getAttribute('href')
      if (router.pathname !== href) {
        const page = document.querySelector('.page')
        tl.to(sail, { duration: 1.2, transform: "translate3d(0px, 0px, 0px)", ease: "power3.inOut" }, 0)
        tl.to(page, { duration: 1.2, transform: "translateY(-70px)", ease: "power2.inOut" }, 0)
        tl.to('.js-nav-item', { duration: 1, transform: "translateY(-150%)", ease: "power2.inOut" }, 0)
        tl.call(() => router.push(href))
      }
    };

    // Callback for when navigating to different route is done
    const pageIn = () => {
      // stop further clicking until animation is complete
      const links = document.querySelectorAll('.js-pt')
      links.forEach((link) => {
        link.style.pointerEvents = 'none'
      });

      const page = document.querySelector('.page')
      tl.add("mutA")
      tl.to(sail, { duration: 1.2, transform: "translate3d(0px, -100%, 0px)", ease: "power3.inOut" }, "mutA")
      tl.from(page, { duration: 1.2, transform: "translateY(70px)", ease: "power2.inOut" }, "mutA")
      tl.to(sail, { duration: 0, transform: "translate3d(0px, 101%, 0px)" });
      tl.fromTo('.js-nav-item', { transform: "translateY(130%)" }, { duration: 1.2, transform: "translateY(0%)", ease: "power2.inOut", stagger: 0.1, delay: 0.5 }, "mutA")

      if (document.getElementById('services') !== document.querySelector('.page')) {
        const heroTitle = new SplitText('.js-hero-split', { type: "chars" })

        if (document.documentElement.clientWidth > 480) {
          const splits = new SplitText('.js-split', { type: "lines", linesClass: "s_line" })
          const splits2 = new SplitText('.s_line', { type: "char", wordsClass: "s_word" })
        }

        // MAIN TIMELINE
        // =============

        const heroTl = new gsap.timeline({
          paused: true,
          force3D: true,
          onComplete: () => {
            links.forEach((link) => {
              link.style.pointerEvents = 'all'
              link.addEventListener('click', pageOut)
            });
          }
        })


        // NOTE: THIS TITLEWORDS IS NOT ITERABLE
        let heroSplit = document.querySelectorAll('.js-hero-split')
        const titleWords = heroSplit[0].children
        for (let i = 0; i < titleWords.length; i++) {
          heroTl.from(titleWords[i], {
            yPercent: 100,
            rotateX: 110,
            duration: 1.5 + i / 15,
            // duration: 1.5 + i / 10 + i * 0.02,
            ease: 'power3.inOut',
            // delay: n
          }, 0)
        }

        // If more than 1 line in hero title
        if (heroSplit.length > 1) {
          const secondWords = heroSplit[1].children
          for (let i = 0; i < secondWords.length; i++) {
            heroTl.from(secondWords[i], {
              yPercent: 100,
              rotateX: 130,
              duration: 1.5 + i / 15,
              ease: 'power3.inOut',
            }, 0)
          }
        }

        heroTl.from('.arrow-icon', {
          y: "-100%",
          x: "-100%",
          duration: 1.5,
          ease: 'power3.inOut',
          delay: 0.3,
        }, 0)

        heroTl.from('.js-hero-line', {
          scaleX: 0,
          duration: 1.5,
          ease: 'expo.inOut',
        }, 1.2)

        heroTl.play()


      }
      else {
        tl.add(() => {
          links.forEach((link) => {
            link.style.pointerEvents = 'all'
            link.addEventListener('click', pageOut)
          });
        })
      }
    };

    router.events.on('routeChangeComplete', pageIn);

    const links = document.querySelectorAll('.js-pt')
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


  // GSAP ANIMATIONS
  // ===============

  useEffect(() => {
    let ctx = gsap.context(() => {
      const isServicesPage = document.getElementById('services') !== document.querySelector('.page')
      if (isServicesPage) {

        // SPLIT THE LETTERS
        // =================

        const heroTitle = new SplitText('.js-hero-split', { type: "chars" })
        if (document.documentElement.clientWidth > 480) {
          const splits = new SplitText('.js-split', { type: "lines", linesClass: "s_line" })
          const splits2 = new SplitText('.s_line', { type: "char", wordsClass: "s_word" })
        }


        // MAIN TIMELINE
        // =============

        const tl = new gsap.timeline({
          paused: true,
          force3D: true,
        })


        // NOTE: THIS TITLEWORDS IS NOT ITERABLE
        let heroSplit = document.querySelectorAll('.js-hero-split')
        const titleWords = heroSplit[0].children
        for (let i = 0; i < titleWords.length; i++) {
          tl.from(titleWords[i], {
            yPercent: 100,
            rotateX: 110,
            duration: 1.5 + i / 15,
            // duration: 1.5 + i / 10 + i * 0.02,
            ease: 'power3.inOut',
            // delay: n
          }, 0)
        }

        // If more than 1 line in hero title
        if (heroSplit.length > 1) {
          const secondWords = heroSplit[1].children
          for (let i = 0; i < secondWords.length; i++) {
            tl.from(secondWords[i], {
              yPercent: 100,
              rotateX: 130,
              duration: 1.5 + i / 15,
              ease: 'power3.inOut',
            }, 0)
          }
        }

        tl.from('.arrow-icon', {
          y: "-100%",
          x: "-100%",
          duration: 1.5,
          ease: 'power3.inOut',
          delay: 0.3,
        }, 0)

        tl.from('.js-hero-line', {
          scaleX: 0,
          duration: 1.5,
          ease: 'expo.inOut',
          // delay: 1,
        }, 1.2)

        tl.play()
      }
    });

    return () => ctx.revert(); // <- cleanup!
  }, [])


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
