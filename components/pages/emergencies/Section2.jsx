import styles from './Section2.module.scss'
import Link from 'next/link'

export default function Section2() {
  return (
    <>
      <section className={styles.callout}>
        <div className={styles.container}>

          {/* =========== CONTENT =========== */}

          <div className={styles.text}>
            <h2 className={styles.label}>
              <svg viewBox="0 0 12 12" fill="none" className={styles.icon}><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
              <span className={styles.subheading}>First things first — Stay Calm.</span>
            </h2>
            <h2 className={styles.title}>
              Focus on stopping any bleeding and protecting the the injured area. If you&apos;re experiencing a dental emergency or need urgent care, give us a call at (206) 325-0166 and we&apos;ll discuss treatment options with you. If your emergency is life-threatening, dial 911 now or go to a hospital emergency room.
            </h2>

            <div className={styles.info}>
              <div className={styles.heading}>
                Dental urgent care for:
              </div>
              <div className={styles.accent}></div>
              <ul className={styles.list1}>
                <li>Relief of pain</li>
                <li>Lost filling or crown</li>
                <li>Broken tooth</li>
              </ul>
              <ul className={styles.list2}>
                <li>Toothache</li>
                <li>Swelling or Abscess</li>
                <li>Loose or knocked out tooth</li>
              </ul>
              <ul className={styles.list3}>
                <li>Trauma to the mouth</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}