import Image from "next/image"
import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            <span>FAQ</span>
            <span className={styles.line}></span>
            {/* <br /> */}
            {/* <span>325-0166</span> */}
            {/* <span className={styles.line}></span> */}
          </h1>
          <span className={styles.arrow}>
            <Image src="icons/icon-arrow-diagonal.svg" width={21} height={20} alt=''></Image>
          </span>
          <p className={styles.paragraph}>
            Questions and Answers.
          </p>
        </div>
      </section>
      <div className={styles.separator}></div>
    </>
  )
}
