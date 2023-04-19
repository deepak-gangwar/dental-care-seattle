import styles from '@/styles/Home.module.css'
import Hero from './pages/home/hero'
import Section1 from './pages/home/section1'
import Section2 from './pages/home/section2'

export default function Homepage() {
  return (
    <>
      <Hero />
      <Section1 />
      <Section2 />
    </>
  )
}