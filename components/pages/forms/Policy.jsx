import Image from 'next/image'
import styles from './Policy.module.scss'
import Link from "next/link"

export default function Policy() {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.policy}>
                    <h2 className={styles.title}>Insurance</h2>
                    {/* <span className={styles.arrow}>
                        <Image src="icons/icon-arrow-diagonal.svg" width={21} height={20} alt=''></Image>
                    </span> */}
                    <p className={styles.description}>
                        We accept a variety of insurance providers. At your first appointment, please bring your insurance information or policy holder&apos;s card, and/or group number to expedite insurance processing. We also accept <a className={styles.links} href="http://www.carecredit.com/">CareCredit</a>, a dental and health care financing program that makes costs more affordable, with low interest rates and monthly payments.
                    </p>
                </div>
                <div className={styles.policy}>
                    <h2 className={styles.title}>Financial Policy</h2>
                    <p className={styles.description}>
                        For all treatment, we&apos;ll ask for payment of the portion of fees not covered by insurance at the time of your procedure. You can also pay your bill any time <span><Link className={styles.links} href="/payment">Pay Online</Link></span>, or over the phone. Read our full <a className={styles.links} href="https://www.dentalcareseattle.com/s/DentalCareSeattle_FinancialPolicy.pdf">Financial Policy (PDF)</a> for more information, and <span><Link className={styles.links} href="/contact">Contact Us</Link></span> for questions or information regarding billing.
                    </p>
                </div>
                <div className={styles.policy}>
                    <h2 className={styles.title}>Cancellation Policy</h2>
                    <p className={styles.description}>
                        We know there are times and situations when you cannot keep your appointment. If this happens, please realize that we need 48 hours notice so we may offer this time for another patient. Cancellations within 48 hours are subject to a fee. Please <span><Link className={styles.links} href="/contact">Contact Us</Link></span> as soon as possible if you need to change your appointment.
                    </p>
                </div>
            </div>
        </>
    )
}