import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Homepage from '@/component/Home'

export default function Home() {

  return (
    <>
      <Head>
        <title>Dental Care seattle</title>
        <meta name="description" content="Meet your top-rated Seattle practice for cosmetic, restorative, and preventative dentistry on First Hill. You can expect the best care, gentle treatment, and beautiful results from your dentist in Seattle!" />
      </Head>
      <div id='home' className='page'>
        <Homepage />
      </div>
    </>
  )
}
