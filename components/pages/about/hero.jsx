import Image from "next/image"
import styles from './hero.module.scss'

export default function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            <span>Discover</span>
            <span className={styles.line}></span>
            <br />
            <span className={styles.line}></span>
            <span>who we are</span>
          </h1>
          <span className={styles.arrow}>
            <Image src="icons/icon-arrow-diagonal.svg" width={21} height={20} alt=''></Image>
          </span>
          <p className={styles.paragraph}>
            Learn more about us.
          </p>
        </div>
      </section>
      <div className={styles.separator}></div>
    </>
  )
}