import Footer from "@/component/footer"
import Head from "next/head"
import Link from "next/link"

export default function Payment() {
  return (
    <>
      <Head>
        <title>About — Dental Care seattle</title>
        <meta name="description" content="Meet your top-rated Seattle practice for cosmetic, restorative, and preventative dentistry on First Hill. You can expect the best care, gentle treatment, and beautiful results from your dentist in Seattle!" />
      </Head>
      <div id='about' className='page'>
        {/* <Dots /> */}

        <div className="main__wrapper">
          <h1>Make a Payment</h1>
          <p>Use the button below to pay your bill online. Reference the “Chart No.” in the top-right corner of your most recent statement, and the current balance due.</p>
          <h2>SECURE PAYMENTS</h2>
          <p>Payments and patient information are processed securely through Authorize.net. We accept Visa, Mastercard, American Express, and Discover cards. </p>

          {/* The payment button */}
          <form data-preserve-html-node="true" name="PrePage" method="post" action="https://Simplecheckout.authorize.net/payment/CatalogPayment.aspx" id="yui_3_17_2_1_1686491703206_705">
            <input data-preserve-html-node="true" type="hidden" name="LinkId" value="aafd7d94-bd8b-4863-976e-700af11d0807" /> <input data-preserve-html-node="true" type="submit" value="Pay Online " id="yui_3_17_2_1_1686491703206_704" class="" />
          </form>
        </div>

        <div className="sidebar">
          <h3>Payment options</h3>
          <p>
            We also accept payments by phone, mail, or in the office at the time of service.
            Please <span><Link href="/contact">Contact Us</Link></span> to discuss payment options, and read our <span><a href="https://www.dentalcareseattle.com/s/DentalCareSeattle_FinancialPolicy.pdf">Financial Policy</a></span> for more information.
          </p>
        </div>
        <Footer />
      </div>
    </>
  )
}