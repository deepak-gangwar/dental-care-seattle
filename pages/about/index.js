import Hero from "@/component/pages/about/hero"
import Head from "next/head"

export default function About() {
  return (
    <>

      <Head>
        <title>About — Dental Care seattle</title>
        <meta name="description" content="Meet your top-rated Seattle practice for cosmetic, restorative, and preventative dentistry on First Hill. You can expect the best care, gentle treatment, and beautiful results from your dentist in Seattle!" />
      </Head>
      <div id='home' className='page'>
        <Hero />
      </div>
    </>

  )
}