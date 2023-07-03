import styles from './Section2.module.scss'
import Link from 'next/link'

export default function Section2() {
  return (
    <>
      <section className={styles.forms}>
        <div className={styles.container}>

          {/* =========== CONTENT =========== */}

          <div className={styles.text}>
            <h2 className={styles.label}>
              <svg viewBox="0 0 12 12" fill="none" className={styles.icon}><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
              <span className={styles.subheading}>Contact</span>
            </h2>
            <h2 className={styles.title1}>
              Your smile starts here Reach our office
            </h2>
            <div className={styles.body}>
              <p className={styles.paragraph}>
                Get started at our modern First Hill office in Seattle using the form below, or give us a call at (206) 325-0166 to chat with our helpful front office team—we&apos;re cool with texting, too!
              </p>
            </div>
            <h2 className={styles.title2}>
              Or leave your details to request for an appointment
            </h2>
            {/* <div className={styles.accent}></div> */}

            {/* ========== Exo ape button component ========== */}

            <div className={styles.btn}>
              {/* <Link href={`/team/${result.slug.current}`}><button>Learn more</button></Link> */}
              <Link className={styles.link} href='/forms' >
                <div className={styles.wrap}>
                  <div className={styles.circle}>
                    <div className={styles.circle_fill}></div>
                    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className={styles.circle_outline}><circle cx="25" cy="25" r="23"></circle></svg>
                    <div className={styles.circle_icon}>
                      <svg viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.icon_arrow}><path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z" fill="currentColor"></path></svg>
                    </div>
                  </div>
                  <div className={styles.btn_label}>
                    Fill the form below
                    <div className={styles.border}></div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}