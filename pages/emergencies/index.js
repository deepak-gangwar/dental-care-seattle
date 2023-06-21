import Head from "next/head"
import Footer from "@/component/footer"
import Hero from "@/component/pages/emergencies/Hero"
import Section2 from "@/component/pages/emergencies/Section2"

export default function Emergencies() {
  return (
    <>
      <Head>
        <title>Emergency Dental Treatment — Dental Care seattle</title>
        <meta name="description" content="Meet your top-rated Seattle practice for cosmetic, restorative, and preventative dentistry on First Hill. You can expect the best care, gentle treatment, and beautiful results from your dentist in Seattle!" />
      </Head>
      <div id='emergencies' className='page'>
        <Hero />
        <Section2 />
        <Footer />
      </div>
    </>
  )
}