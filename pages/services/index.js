import styles from "@/styles/components/Service.module.scss"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import Service from "@/component/pages/services/Service"

export default function Services() {
  const [current, setCurrent] = useState(0)

  function goToPrev() {
    onCurrentItemChange(-1)
  }

  function goToNext() {
    onCurrentItemChange(1)
  }

  function onCurrentItemChange(e) {
    let slidesNum = 4
    let index = current + e

    if (index >= 0 && index < slidesNum) {
      setCurrent(index)
    } else if (index < 0) {
      setCurrent(slidesNum - 1)
    } else if (index >= slidesNum) {
      setCurrent(0)
    }
  }

  return (
    <>
      <Head>
        <title>Services — Dental Care Seattle</title>
        <meta name="description" content="Our dentists offer full-service cosmetic dentistry including teeth whitening, Invisalign, porcelain veneers, smile design, and more at Dental Care Seattle on First Hill in Seattle, Washington.&nbsp;" />
      </Head>
      <div id='home' className="page">
        <header className={styles.hero}>

          {/* ===============  Content  =============== */}

          <h1 className={styles.h1}>Services</h1>
          <button className={`${styles.controls} ${styles.prev}`} onClick={goToPrev}>
            <svg viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.control_arrow}><path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z" fill="currentColor"></path></svg>
            <svg viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.control_arrow_clone}><path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z" fill="currentColor"></path></svg>
          </button>
          <button className={`${styles.controls} ${styles.next}`} onClick={goToNext}>
            <svg viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.control_arrow}><path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z" fill="currentColor"></path></svg>
            <svg viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.control_arrow_clone}><path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z" fill="currentColor"></path></svg>
          </button>



          {/* Maybe change this to a list ul */}
          <div className={styles.items}>
            {/* Items are the number of instagram stories you want to add */}
            {[0, 1, 2, 3].map((item, index) => (
              <Service
                key={index}
                isActive={current === index ? true : false}
              />
            ))}
            {/* <Service />
            <Service /> */}
          </div>

          {/* ===============  Story Navigation  =============== */}
          <div className={styles.nav}>
            {/* Add as many buttons as there are posts */}
            <button aria-label="Cosmetic Dentistry" className={styles.button}>
              <div className={styles.indicator}></div>
            </button>
            <button aria-label="Restorative Dentistry" className={styles.button}>
              <div className={styles.indicator}></div>
            </button>
            <button aria-label="Preventative Dentistry" className={styles.button}>
              <div className={styles.indicator}></div>
            </button>
            <button aria-label="Invisalign" className={styles.button}>
              <div className={styles.indicator}></div>
            </button>
          </div>
        </header>


        {/* <h1>Services</h1>
        <section>
          <h2>Cosmetic Dentistry</h2>
          <p>
            Feeling good when you smile is a true asset. At Dental Care Seattle,
            cosmetic dentistry by our doctors can offer you a head-turning smile.
            Sometimes just a few minor changes make all the difference. In other
            cases, you may want to address many teeth. Bring us your concerns,
            and our doctors can plot the course for your ideal smile.
          </p>
        </section>
        <section>
          <h2>Restorative Dentistry</h2>
          <p>
            Our doctors have the right expertise and equipment to bring out the
            best in your smile! Restorative dentistry in our Seattle practice can
            replace and repair teeth, restore your ideal bite, and strengthen the
            integrity of your smile. Eating is one of life&apos;s greatest pleasures,
            but only when you have a healthy mouth — we&apos;re here to help you
            make a plan to restore your smile.
          </p>
        </section>
        <section>
          <h2>Preventative Dentistry</h2>
          <p>
            We&apos;re here to help you ensure your oral health for years to come.
            Our preventive dentistry services include regular dental cleanings,
            sealants, and any procedures used to slow and stop tooth decay or other
            oral diseases in their earliest stages. Our goal is to keep you and your
            mouth as healthy and clean as possible so you can maintain your natural
            teeth for life.
          </p>
        </section> */}
      </div>

    </>
  )
}