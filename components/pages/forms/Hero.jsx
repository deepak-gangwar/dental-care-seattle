import Image from "next/image"
import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            {/* <span>Discover</span> */}
            {/* <span className={styles.line}></span> */}
            {/* <br /> */}
            <span data-split="hero-title">Start forms</span>
            <span className={`js-hero-line ${styles.line}`}></span>
          </h1>
          <span className={styles.arrow}>
            <Image className="arrow-icon" src="icons/icon-arrow-diagonal.svg" width={21} height={20} alt=''></Image>
          </span>
          <p className={`js-split ${styles.paragraph}`}>
            Let&apos;s get ready for your first appointment.
          </p>
        </div>
        <div className="fouc-overlay"></div>
      </section>
      <div className={styles.separator}></div>
    </>
  )
}
