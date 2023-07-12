import ButtonPrimary from '@/component/buttonPrimary'
import styles from './sectionNews.module.scss'

export default function SectionNews() {
  return (
    <section className={styles.lg__heading}>
      <div className={styles.subheadingWrapper}>
        <div className={styles.subheading}>
          <svg viewBox="0 0 12 12" fill="none" className={styles.subheadingIcon}><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
          <span className={styles.subheadingLabel}>Couldn&apos;t find what you were looking for.</span>
        </div>
        <div className={styles.heading}>
          <h3>Still have Questions?</h3>
        </div>
        <p className={styles.description}>
          We are happy to help.
        </p>
        <ButtonPrimary pt={true} path={"/contact"} label={"Reach out"} theme={"light"} />
      </div>
    </section>
  )
}