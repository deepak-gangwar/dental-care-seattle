import Image from "next/image"
import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            {/* <span>Make</span> */}
            {/* <span className={styles.line}></span> */}
            {/* <br /> */}
            <span data-split="hero-title">Careers with us</span>
            <span className={`js-hero-line ${styles.line}`}></span>
          </h1>
          <span className={styles.arrow}>
            <Image className="arrow-icon" src="icons/icon-arrow-diagonal.svg" width={21} height={20} alt=''></Image>
          </span>
          <p className={`js-split ${styles.paragraph}`}>
            We&apos;re hiring! Join our talented team of patient-first caregivers.
          </p>
        </div>
        <div className="fouc-overlay"></div>
      </section>
      <div className={styles.separator}></div>
    </>
  )
}
