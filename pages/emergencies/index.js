import Head from "next/head"
import Link from "next/link"
import Footer from "@/component/footer"
import Hero from "@/component/pages/emergencies/Hero"

export default function Emergencies() {
  return (
    <>
      <Head>
        <title>Emergency Dental Treatment — Dental Care seattle</title>
        <meta name="description" content="Meet your top-rated Seattle practice for cosmetic, restorative, and preventative dentistry on First Hill. You can expect the best care, gentle treatment, and beautiful results from your dentist in Seattle!" />
      </Head>
      <div id='emergencies' className='page'>
        <Hero />
        <div className="main_wrapper">
          <h1>Dental Emergency? We can help.</h1>
          <span>(206) 325-0166</span>

          <div className="callout">
            <h2>FIRST THING&apos;S FIRST—STAY CALM.</h2>
            <p>Focus on stopping any bleeding and protecting the the injured area. If you&apos;re experiencing a dental emergency or need urgent care, give us a call at (206) 325-0166 and we&apos;ll discuss treatment options with you. If your emergency is life-threatening, dial 911 now or go to a hospital emergency room.</p>
          </div>
        </div>

        <div className="sidebar">
          <h3>Dental urgent care for: </h3>
          <ul>
            <li>RELIEF OF PAIN</li>
            <li>LOST FILLING OR CROWN</li>
            <li>BROKEN TOOTH</li>
            <li>LOOSE OR KNOCKED OUT TOOTH</li>
            <li>TOOTHACHE</li>
            <li>SWELLING OR ABSCESS</li>
            <li>TRAUMA TO THE MOUTH</li>
          </ul>
        </div>
        <Footer />
      </div>
    </>
  )
}