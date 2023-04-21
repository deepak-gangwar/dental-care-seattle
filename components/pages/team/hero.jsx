import Image from "next/image"
import styles from './hero.module.scss'

export default function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            <span>Meet your</span>
            <span className={styles.line}></span>
            <br />
            {/* <span className={styles.line}></span> */}
            <span>Dentists. Say Hi!</span>
          </h1>
          <span className={styles.arrow}>
            <Image src="icons/icon-arrow-diagonal.svg" width={21} height={20} alt=''></Image>
          </span>
          <p className={styles.paragraph}>
            We work with the best for you.
          </p>
        </div>
      </section>
      <div className={styles.separator}></div>
    </>
  )
}