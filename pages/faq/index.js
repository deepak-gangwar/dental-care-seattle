import Footer from "@/component/footer"
import Head from "next/head"
import Link from "next/link"

export default function FAQ() {
  return (
    <>
      <Head>
        <title>FAQ — Dental Care seattle</title>
        <meta name="description" content="Meet your top-rated Seattle practice for cosmetic, restorative, and preventative dentistry on First Hill. You can expect the best care, gentle treatment, and beautiful results from your dentist in Seattle!" />
      </Head>
      <div id='faq' className='page'>
        {/* <Dots /> */}

        <div className="main__wrapper">
          <h1>FAQ</h1>

          <h2>the content of this should come from sanity cms</h2>
          <section className="booking">
            <div className="question__wrapper">
              <div className="question">How do I reschedule or cancel my appointment?</div>
              <div className="answer">Call or text us at (206) 325-0166 if you need to cancel or reschedule your appointment—just make sure to do so more than two business days before your appointment time. If you cancel or reschedule less than two business days in advance, we’ll have to charge you a fee of $80 per hour of scheduled time. This is because we&apos;ve reserved that time specifically for your care, and our appointments are in very high demand.</div>
            </div>
          </section>
        </div>

        <div className="inquiry__wrapper">
          <h2>STILL HAVE QUESTIONS? WE’RE HAPPY TO HELP!</h2>
          <Link href="/contact">Contact Us</Link>
        </div>
        <Footer />
      </div>
    </>
  )
}