import Footer from "@/component/footer"
import Hero from "@/component/pages/faq/Hero"
import Section2 from "@/component/pages/faq/Section2"
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
        <Hero />
        <Section2 />
        <Footer />
      </div>
    </>
  )
}