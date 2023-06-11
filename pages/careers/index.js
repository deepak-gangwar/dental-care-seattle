import Footer from "@/component/footer"
import Head from "next/head"
import Link from "next/link"

export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers — Dental Care seattle</title>
        <meta name="description" content="Meet your top-rated Seattle practice for cosmetic, restorative, and preventative dentistry on First Hill. You can expect the best care, gentle treatment, and beautiful results from your dentist in Seattle!" />
      </Head>
      <div id='careers' className='page'>
        {/* <Dots /> */}

        <div className="main__wrapper">
          <h1>We&apos;re hiring! Join our talented team of patient-first caregivers.</h1>

          <pre>Note: these items should come from sanity cms as well as when  you click on learn more it should open the dynamic job description page. Still need to work on that part by creating dynamic routes</pre>
          <section className="opening">
            <h2>Dental Hygenist</h2>
            <span>Clinical Team</span>
            <a>Learn more</a>
          </section>
        </div>

        <div className="sidebar">
          <h3>Apply now</h3>
          <p>To apply, <a href="mailto:careers@dentalcareseattle.com">email us</a> and include the position you&apos;re interested in and a copy of your resume. Thanks!</p>
        </div>
        <Footer />
      </div>
    </>
  )
}