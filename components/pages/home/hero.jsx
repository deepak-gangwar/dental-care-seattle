import Image from "next/image"
import styles from './hero.module.scss'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.heading}>
          <span className="js-hero-split">Say everything</span>
          <span className={styles.line}></span>
          <br />
          <span className={styles.line}></span>
          <span className="js-hero-split">with your smile</span>
        </h1>
        <span className={styles.arrow}>
          <Image src="icons/icon-arrow-diagonal.svg" width={21} height={20} alt=''></Image>
        </span>
        <p className={styles.paragraph}>
          Gentle and friendly treatment from our locally owned practice in Washington.
        </p>
      </div>
    </section>
  )
}