import Image from "next/image"
import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            <span className="js-hero-split">Discover</span>
            <span className={`js-hero-line ${styles.line}`}></span>
            <br />
            <span className={`js-hero-line ${styles.line}`}></span>
            <span className="js-hero-split">who we are</span>
          </h1>
          <span className={styles.arrow}>
            <Image className="arrow-icon" src="icons/icon-arrow-diagonal.svg" width={21} height={20} alt=''></Image>
          </span>
          <p className={`js-split ${styles.paragraph}`}>
            Learn more about us.
          </p>
        </div>
      </section>
      <div className={styles.separator}></div>
    </>
  )
}
