import styles from '@/styles/Home.module.css'
import Hero from './pages/home/hero'
import Section1 from './pages/home/section1'
import Section2 from './pages/home/section2'
import SectionNews from './pages/home/sectionNews'
import Section4 from './pages/home/section4'
import FooterCurve from './footerCurve'
import Footer from './footer'

export default function Homepage() {
  return (
    <>
      <Hero />
      <Section1 />
      <Section2 />
      {/* <SectionNews /> */}
      <Section4 />
      <FooterCurve color={"#15161c"} />
      <Footer />
    </>
  )
}