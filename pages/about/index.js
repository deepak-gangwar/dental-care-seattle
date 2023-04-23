import Head from "next/head"
import Hero from "@/component/pages/about/Hero"
import Section1 from "@/component/pages/about/Section1"
import Dots from "@/component/Dots"
import Section2 from "@/component/pages/about/Section2"

export default function About() {
  return (
    <>

      <Head>
        <title>About — Dental Care seattle</title>
        <meta name="description" content="Meet your top-rated Seattle practice for cosmetic, restorative, and preventative dentistry on First Hill. You can expect the best care, gentle treatment, and beautiful results from your dentist in Seattle!" />
      </Head>
      <div id='about' className='page'>
        <Dots />
        <Hero />
        <Section1 />
        <Section2 />
      </div>
    </>

  )
}