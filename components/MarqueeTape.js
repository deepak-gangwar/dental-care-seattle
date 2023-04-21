import styles from '@/styles/components/MarqueeTape.module.scss'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


export default function MarqueeTape() {
  // Scrolltrigger Scroll Letters Home
  // =================================
  // TODO: remove this function from here and make so that it only runs when in view because this is cause call stack size limit to exceed max

  function initScrollLetters() {
    // Scrolling Letters Both Direction
    // https://codepen.io/GreenSock/pen/rNjvgjo
    // Fixed example with resizing
    // https://codepen.io/GreenSock/pen/QWqoKBv?editors=0010

    let direction = 1 // 1 = forward, -1 = backward scroll

    // To add more roll animations, just make another one like 
    // roll1 and pass it to array in gsap.to in the onUpdate fn
    // also pass in true as third argument if want to run reverse
    const roll1 = roll(".js-tape .js-tape-wrap", { duration: 18 })
    const scroll = ScrollTrigger.create({
      trigger: document.querySelector('#app'),
      onUpdate(self) {
        if (self.direction !== direction) {
          direction *= -1
          gsap.to([roll1], { timeScale: direction, overwrite: true })
        }
      }
    })
  }

  // Helper function that clones the targets, places them next to the 
  // original, then animates the xPercent in a loop to make it appear 
  // to roll across the screen in a seamless loop.

  function roll(targets, opts = {}, reverse) {
    opts.ease || (opts.ease = "none")
    const tl = gsap.timeline({
      repeat: -1,
      onReverseComplete() {
        this.totalTime(this.rawTime() + this.duration() * 10)
        // otherwise when the playhead gets back to the beginning, it'd stop. 
        // So push the playhead forward 10 iterations(it could be any number)
      }
    })

    const elements = gsap.utils.toArray(targets)
    const clones = elements.map(el => {
      let clone = el.cloneNode(true)
      el.parentNode.appendChild(clone)
      return clone
    })

    // const positionClones = () => elements.forEach((el, i) => gsap.set(clones[i], { position: "absolute", overwrite: false, top: el.offsetTop, left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth) }))
    const positionClones = () => {
      elements.forEach((el, i) => {
        gsap.set(clones[i],
          {
            position: "absolute",
            overwrite: false,
            top: el.offsetTop,
            left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth)
          })
      })
    }
    positionClones()

    elements.forEach((el, i) => tl.to([el, clones[i]], { xPercent: reverse ? 100 : -100, ...opts }, 0))
    window.addEventListener("resize", () => {
      let time = tl.totalTime() // record the current time
      tl.totalTime(0) // rewind and clear out the timeline
      positionClones() // reposition
      tl.totalTime(time) // jump back to the proper time
    })

    return tl
  }


  // MARQUEE TAPE EFFECT
  // ===================

  useEffect(() => {
    initScrollLetters()
  }, [])

  return (
    <div className={`js-tape ${styles.big_name}`}>
      <div className={styles.name_h1}>
        <div className={`js-tape-wrap ${styles.name_wrap}`}>
          <h1 className={styles.no_select}>
            Forever Upwards — Forever Upwards
            <span className={styles.spacer}>—</span>
          </h1>
        </div>
        <div className={styles.name_wrap}>
          <h1 className={styles.no_select}>
            Forever Upwards — Forever Upwards
            <span className={styles.spacer}>—</span>
          </h1>
        </div>
      </div>
    </div>
  )
}