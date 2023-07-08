import Footer from "@/component/footer"
import Hero from "@/component/pages/careers/Hero"
import Section2 from "@/component/pages/careers/Section2"
import Section3 from "@/component/pages/careers/Section3"
import SectionNews from "@/component/pages/careers/sectionNews"
import Head from "next/head"

export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers — Dental Care seattle</title>
        <meta name="description" content="Meet your top-rated Seattle practice for cosmetic, restorative, and preventative dentistry on First Hill. You can expect the best care, gentle treatment, and beautiful results from your dentist in Seattle!" />
      </Head>
      <div id='careers' className='page'>
        {/* <Dots /> */}
        <Hero />
        <Section2 />
        <SectionNews />
        <Section3 />
        <Footer />
      </div>
    </>
  )
}