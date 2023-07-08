import styles from './sectionNews.module.scss'

export default function SectionNews() {
  return (
    <section className={styles.lg__heading}>
      <div className={styles.subheadingWrapper}>
        <div className={styles.subheading}>
          <svg viewBox="0 0 12 12" fill="none" className={styles.subheadingIcon}><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
          <span className={styles.subheadingLabel}>Join the Team</span>
        </div>
        <div className={styles.heading}>
          <h3>Current Openings</h3>
        </div>
        <p className={styles.description}>
          Positions we are actively recruiting for are listed below.
          {/* If you don&apos;t feel like you align exactly with these
          qualifications but think you&apos;d be a great fit for our team,
          please tell us why! */}
        </p>
      </div>
    </section>
  )
}