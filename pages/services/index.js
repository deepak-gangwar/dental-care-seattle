import styles from "@/styles/components/Services.module.scss"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Service from "@/component/pages/services/Service"

const jsonData = [
  {
    publisher: "Cosmetic Dentistry",
    line1: "At Dental Care Seattle, cosmetic",
    line2: "dentistry by our doctors can offer",
    line3: "you a head turning smile, because",
    line4: "that is a true asset.",
  },
  {
    publisher: "Restorative Dentistry",
    line1: "Restorative dentistry can replace",
    line2: "and repair teeth, restore your ideal",
    line3: "bite, and strengthen the integrity",
    line4: "of your smile",
  },
  {
    publisher: "Preventative Dentistry",
    line1: "Our preventive dentistry services",
    line2: "include regular dental cleanings,",
    line3: "sealants, and any prodecures to",
    line4: "slow and stop decay and diseases.",
  }
]

export default function Services() {
  const [current, setCurrent] = useState(0)

  function goToPrev() {
    onCurrentItemChange(-1)
  }

  function goToNext() {
    onCurrentItemChange(1)
  }

  function onCurrentItemChange(e) {
    let slidesNum = 3
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


          {/* ===============  Stories list  =============== */}

          <div className={styles.items}>
            {/* Items are the number of instagram stories you want to add */}
            {jsonData.map((item, index) => (
              <Service
                data={item}
                key={index}
                isActive={current === index ? true : false}
              />
            ))}
          </div>


          {/* ===============  Story Navigation  =============== */}
          <div className={styles.nav}>
            {/* Add as many buttons as there are posts */}
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
      </div>
    </>
  )
}