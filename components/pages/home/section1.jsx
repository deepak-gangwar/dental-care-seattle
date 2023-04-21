import Image from 'next/image'
import styles from './section1.module.scss'
import MarqueeTape from '@/component/MarqueeTape'

export default function Section1() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.col}>
                        <div className={styles.poster}>
                            <div className={styles.embed}>
                                {/* <Image src="/office.jpg" className={styles.image} alt="" width={100} height={100} /> */}
                            </div>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <h2 className={styles.subheading}>
                            <svg viewBox="0 0 12 12" fill="none" className={styles.icon}><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
                            <span className={styles.label}>Who we are</span>
                        </h2>
                        <p className={styles.paragraph}>
                            Dental Care Seattle is a top-rated
                            local practice for cosmetic, preventative,
                            and restorative dentistry on First Hill.
                        </p>
                        <p className={styles.description}>
                            Visit us at our convenient office on Broadway and expect
                            the best care, gentle treatment, and beautiful results from
                            your dentist!
                        </p>
                    </div>
                    {/* <h3 className={styles.large__heading}>Forever Upwards — Forever Upwards</h3> */}
                </div>
            </div>
            <MarqueeTape />
        </section>
    )
}