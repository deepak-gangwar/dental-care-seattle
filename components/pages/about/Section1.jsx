import Image from 'next/image'
import styles from './Section1.module.scss'

export default function Section1() {
  return (
    <section className={styles.services}>
      <div className={styles.container}>

        {/* =========== IMAGES =========== */}

        <ul className={styles.images}>
          <li className={styles.image}>
            <picture type="image">
              {/* <Image src='' alt='' /> */}
            </picture>
          </li>
          <li className={styles.image}>
            <picture type="image">
              {/* <Image src='' alt='' /> */}
            </picture>
          </li>
          <li className={styles.image}>
            <picture type="image">
              {/* <Image src='' alt='' /> */}
            </picture>
          </li>
        </ul>


        {/* =========== CONTENT =========== */}

        <div className={styles.text}>
          <h2 className={styles.label}>
            <svg viewBox="0 0 12 12" fill="none" className={styles.icon}><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
            <span className={styles.text}>Partners</span>
          </h2>
          <h2 className={styles.title}>
            We partner with brands and businesses that create exceptional experiences where people live, work and unwind.
          </h2>
          <div className={styles.body}>
            {/* this is changed here */}
            <p className={styles.paragraph}>
              Interior Design and Furniture, Architecture and Real Estate, Hospitality, Travel & tourism.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}