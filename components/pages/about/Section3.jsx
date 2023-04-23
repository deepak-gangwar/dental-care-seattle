import styles from './Section3.module.scss'

export default function Section3() {
    return (
        <>
            <section className={styles.a_s4}>
                <div className={styles.left}>
                    <div>
                        <h2>Careers</h2>
                        <a href="" className={`underline ${styles.a_s4_l_cta}`}>
                            Would you like to join us?
                        </a>
                        <div className={styles.a_s4_l_desc}>
                            DCS is always looking for talented individuals to join our team.
                        </div>
                    </div>
                    <div>
                        <div className={styles.a_s3_sub}>Join us</div>
                        <div className={styles.a_s4_r_email}>
                            <div>Career Inquiries:</div>
                            <a href="" className='underline'>careers@dentalcareseattle.com</a>
                        </div>
                        <div className={styles.a_s4_r_detail}>
                            DCS is an Equal Opportunity Employer.
                        </div>
                    </div>
                </div>
            </section>
            <div className={styles.separator}></div>
        </>
    )
}