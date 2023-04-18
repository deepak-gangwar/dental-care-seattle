import Image from "next/image"
import styles from './hero.module.scss'

export default function BlockHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Say everything with your smile</h1>
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