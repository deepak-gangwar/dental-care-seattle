import Footer from "@/component/footer";
import Section2 from "@/component/pages/contact/Section2";
import Section3 from "@/component/pages/contact/Section3";
import Section4 from "@/component/pages/contact/Section4";
import Hero from "@/component/pages/contact/hero";
import Head from "next/head";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact — Dental Care seattle</title>
                <meta name="description" content="Meet your top-rated Seattle practice for cosmetic, restorative, and preventative dentistry on First Hill. You can expect the best care, gentle treatment, and beautiful results from your dentist in Seattle!" />
            </Head>
            <div id='contact' className='page'>
                <Hero />
                <Section2 />
                <Section3 />
                <Section4 />
                <Footer />
            </div>
        </>
    )
}