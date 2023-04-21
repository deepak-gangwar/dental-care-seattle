import Image from 'next/image'
import styles from './join.module.scss'
import ButtonPrimary from '@/component/buttonPrimary'

export default function Join() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2 className={styles.subheading}>
              <svg viewBox="0 0 12 12" fill="none" className={styles.icon}><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
              <span className={styles.label}>Looking for careers with us</span>
            </h2>
            {/* <h3 className={styles.large__heading}>Our Partners</h3> */}

            {/* ================ BODY CONTENT ================ */}

            <p className={styles.paragraph}>
              We&apos;re hiring! Join our talented team of patient-first caregivers.
            </p>
            {/* <p className={styles.description}>
              Visit us at our convenient office on Broadway and expect
              the best care, gentle treatment, and beautiful results from
              your dentist!
            </p> */}

            {/* ================ PHOTOS ================ */}
            {/* <div className={styles.bubble_wrap}>
              <Image className={styles.profile} src="/people1.jpg" fill={true} alt='photo of a person' />
            </div>
            <div className={styles.bubble_wrap_sm}>
              <Image className={styles.profile} src="/people2.jpg" fill={true} alt='photo of a person' />
            </div> */}

            <ButtonPrimary path={"/careers"} label={"See open roles"} theme={"light"} />
          </div>
        </div>
      </div>
    </section>
  )
}