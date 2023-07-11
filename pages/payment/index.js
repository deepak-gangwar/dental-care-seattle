import Head from "next/head"
import Link from "next/link"
import Footer from "@/component/footer"
import Hero from "@/component/pages/payment/Hero"
import styles from "@/component/pages/payment/payment.module.scss"

export default function Payment() {
  return (
    <>
      <Head>
        <title>Pay Online — Dental Care seattle</title>
        <meta name="description" content="Meet your top-rated Seattle practice for cosmetic, restorative, and preventative dentistry on First Hill. You can expect the best care, gentle treatment, and beautiful results from your dentist in Seattle!" />
      </Head>
      <div id='payment' className='page'>
        {/* <Dots /> */}
        <Hero />

        <div className={styles.page__content}>

          <div className={styles.main__wrapper}>
            <p className={styles.cta}>Use the button below to pay your bill online. Reference the “Chart No.” in the top-right corner of your most recent statement, and the current balance due.</p>
            <h2 className={styles.subheading}>Secure Payments</h2>
            <p className={styles.disclaimer}>Payments and patient information are processed securely through Authorize.net. We accept Visa, Mastercard, American Express, and Discover cards. </p>

            {/* The payment button */}

            <div className={styles.btn}>
              <div className={styles.link}>
                <div className={styles.wrap}>
                  <div className={styles.circle}>
                    <div className={styles.circle_fill}></div>
                    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className={styles.circle_outline}><circle cx="25" cy="25" r="23"></circle></svg>
                    <div className={styles.circle_icon}>
                      <svg viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.icon_arrow}><path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z" fill="currentColor"></path></svg>
                    </div>
                  </div>
                  <div className={styles.btn_label}>
                    {/* Pay Online */}
                    <form target="_blank" className={styles.btn__payment} name="PrePage" method="post" action="https://Simplecheckout.authorize.net/payment/CatalogPayment.aspx">
                      <input className={styles.btn__payment} type="hidden" name="LinkId" value="aafd7d94-bd8b-4863-976e-700af11d0807" />
                      <input className={`${styles.btn__payment} ${styles.btn__submit}`} type="submit" value="Pay Online " />
                    </form>
                    <div className={styles.border}></div>
                  </div>
                </div>
              </div>
              {/* <Link className={styles.link} href='/careers' >
                
              </Link> */}
            </div>
            {/* <form data-preserve-html-node="true" name="PrePage" method="post" action="https://Simplecheckout.authorize.net/payment/CatalogPayment.aspx" id="yui_3_17_2_1_1686491703206_705">
              <input data-preserve-html-node="true" type="hidden" name="LinkId" value="aafd7d94-bd8b-4863-976e-700af11d0807" />
              <input data-preserve-html-node="true" type="submit" value="Pay Online " id="yui_3_17_2_1_1686491703206_704" />
            </form> */}
          </div>

          <div className={styles.sidebar}>
            <h3 className={styles.sidebar__heading}>Payment options</h3>
            <p className={styles.sidebar__description}>
              We also accept payments by phone, mail, or in the office at the time of service.
              Please <span><Link href="/contact" className="underline">Contact Us</Link></span> to discuss payment options, and read our <span><a href="https://www.dentalcareseattle.com/s/DentalCareSeattle_FinancialPolicy.pdf" className="underline">Financial Policy</a></span> for more information.
            </p>
            <img className={styles.payment__methods} src="3.webp" alt="payment methods" />
          </div>
        </div>
        <div className={styles.separator}></div>

        <Footer />
      </div>
    </>
  )
}