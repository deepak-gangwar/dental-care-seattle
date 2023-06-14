import Head from "next/head"
import Hero from "@/component/pages/forms/Hero"
import Section2 from "@/component/pages/forms/Section2"
import Policy from "@/component/pages/forms/Policy"
import Footer from "@/component/footer"

export default function Forms() {
  return (
    <>
      <Head>
        <title>Forms — Dental Care seattle</title>
        <meta name="description" content="Meet your top-rated Seattle practice for cosmetic, restorative, and preventative dentistry on First Hill. You can expect the best care, gentle treatment, and beautiful results from your dentist in Seattle!" />
      </Head>
      <div id='forms' className='page'>
        {/* <Dots /> */}
        <Hero />
        <Section2 />
        <Policy />
        <Footer />
      </div>
    </>
  )
}