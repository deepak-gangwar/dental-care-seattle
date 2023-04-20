import styles from './sectionNews.module.scss'
import ButtonPrimary from '@/component/buttonPrimary'

export default function SectionNews() {
    return (
        <section className={styles.news}>
            <div className={styles.subheadingWrapper}>
                <div className={styles.subheading}>
                    <svg viewBox="0 0 12 12" fill="none" className={styles.subheadingIcon}><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
                    <span className={styles.subheadingLabel}>In the media</span>
                </div>
                <div className={styles.heading}>
                    <h3>Spread the News</h3>
                </div>
                <p className={styles.description}>Find out more about our work on these leading design and technology platforms.</p>
                <ButtonPrimary path={"/about"} label={"Browse all news"} theme={"light"} />
            </div>
        </section>
    )
}