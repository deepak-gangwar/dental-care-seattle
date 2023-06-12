import Footer from "@/component/footer"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

export default function Forms() {
  return (
    <>
      <Head>
        <title>Forms — Dental Care seattle</title>
        <meta name="description" content="Meet your top-rated Seattle practice for cosmetic, restorative, and preventative dentistry on First Hill. You can expect the best care, gentle treatment, and beautiful results from your dentist in Seattle!" />
      </Head>
      <div id='forms' className='page'>
        {/* <Dots /> */}

        <div className="intro">
          <h1>Let&apos;s get ready for your first appointment.</h1>
          <Image src="" alt="add a doctors image here" width={10} height={10} />

          <p>Welcome to our practice! Click the button below to get started by securely filling our our new-patient forms. We&apos;ll ask you for current contact and insurance information, and go over a few questions about your health history.</p>

          <a href="http://mform.us/RVUwVngkMjUxNA==">Start forms</a>
        </div>

        <figure className="separator"></figure>

        <div className="policy_wrapper">
          <div className="policy">
            <h2>Insurance</h2>
            <p>
              <span><Link href="/contact">Contact Us</Link></span>
              We accept a variety of insurance providers. At your first appointment, please bring your insurance information or policy holder&apos;s card, and/or group number to expedite insurance processing. We also accept <a href="http://www.carecredit.com/">CareCredit</a>, a dental and health care financing program that makes costs more affordable, with low interest rates and monthly payments.
            </p>
          </div>
          <div className="policy">
            <h2>Financial Policy</h2>
            <p>
              For all treatment, we&apos;ll ask for payment of the portion of fees not covered by insurance at the time of your procedure. You can also pay your bill any time <span><Link href="/payment">Pay Online</Link></span>, or over the phone. Read our full <a href="https://www.dentalcareseattle.com/s/DentalCareSeattle_FinancialPolicy.pdf">Financial Policy (PDF)</a> for more information, and <span><Link href="/contact">Contact Us</Link></span> for questions or information regarding billing.
            </p>
          </div>
          <div className="policy">
            <h2>Cancellation Policy</h2>
            <p>
              We know there are times and situations when you cannot keep your appointment. If this happens, please realize that we need 48 hours notice so we may offer this time for another patient. Cancellations within 48 hours are subject to a fee. Please <span><Link href="/contact">Contact Us</Link></span> as soon as possible if you need to change your appointment.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}