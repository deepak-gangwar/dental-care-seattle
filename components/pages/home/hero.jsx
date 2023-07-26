import Image from "next/image"
import styles from './hero.module.scss'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.heading}>
          <span data-split="hero-title">Say everything</span>
          <span className={`js-hero-line ${styles.line}`}></span>
          <br />
          <span className={`js-hero-line ${styles.line}`}></span>
          <span data-split="hero-title">with your smile</span>
        </h1>
        <span className={styles.arrow}>
          <Image className="arrow-icon" src="icons/icon-arrow-diagonal.svg" width={21} height={20} alt=''></Image>
        </span>
        <p className={`js-split ${styles.paragraph}`}>
          Gentle and friendly treatment from our locally owned practice in Washington.
        </p>
      </div>
    </section>
  )
}