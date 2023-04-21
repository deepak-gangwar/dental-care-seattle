import styles from '@/styles/components/FooterCurve.module.scss'

export default function FooterCurve() {
    return (
        <div id='footer-curve' className={styles.footer_rounded_div}>
            <div className={`${styles.overlay} ${styles.overlay__gradient}`}></div>

            <svg className={`${styles.separator} ${styles.separator__up}`} width="100%" height="100%" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path
                    className="separator__path path-anim"
                    // d="M 0 0 C 40 10 60 10 100 0 L 0 0 Z"
                    d="M 0 0 C 40 7 60 7 100 0 L 0 0 Z"
                    data-path-to="M 0 0 C 40 0 60 0 100 0 L 0 0 Z"
                    vectorEffect="non-scaling-stroke"
                />
            </svg>
        </div>
    )
}