import styles from '@/styles/Home.module.css'
import { useEffect } from 'react'
import Head from 'next/head'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Homepage from '@/component/Home'

// gsap.registerPlugin(ScrollTrigger)

export default function Home() {

  // SECTION 2 INDICATOR PIN ANIMATION
  // =================================

  useEffect(() => {
    // setTimeout(() => {
    //   ScrollTrigger.create({
    //     trigger: "#homecarousel",
    //     start: "top top",
    //     end: "bottom 150px",
    //     pin: "#indicator",
    //   });
    // }, 200);

  })

  return (
    <>
      <Head>
        <title>Dental Care seattle</title>
        <meta name="description" content="Meet your top-rated Seattle practice for cosmetic, restorative, and preventative dentistry on First Hill. You can expect the best care, gentle treatment, and beautiful results from your dentist in Seattle!" />
      </Head>
      <div id='home' className='page'>
        <Homepage />
      </div>
    </>
  )
}
