import styles from './Section4.module.scss'
import Link from 'next/link'

export default function Section3() {
  return (
    <>
      <section className={styles.services}>
        <div className={styles.container}>

          {/* =========== CONTENT =========== */}

          <div className={styles.text}>
            <h2 className={styles.label}>
              <svg viewBox="0 0 12 12" fill="none" className={styles.icon}><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
              <span className={styles.subheading}>Offices</span>
            </h2>

            <div className={styles.a_s2_cta_w}>
              {/* add class line-w and on */}
              <div className={`${styles.a_s2_cta} ${styles.line_w} ${styles.on} underline`}>
                Salt Lake City
                {/* add class line-0 and line-b1 */}
                <span className={styles.line}></span>
              </div>
              <div className={`${styles.a_s2_cta} underline`}>
                St. George
                <span className={styles.line}></span>
              </div>
            </div>



          </div>
        </div>
      </section>
      <div className={styles.separator}></div>
    </>
  )
}