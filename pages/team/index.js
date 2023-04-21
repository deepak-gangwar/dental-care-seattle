import Head from "next/head"
import { sanityClient } from "lib/sanity"
import Hero from "@/component/pages/team/hero"
import Item from "@/component/pages/team/item"

export default function Team({ doctors }) {
  return (
    <>
      <Head>
        <title>Meet Your Dentists — Dental Care Seattle</title>
        <meta name="description" content="Our team of friendly, gentle dentists at Dental Care Seattle." />
      </Head>
      <div id='team' className='page'>
        <Hero />
        <ul style={{ width: "85%", listStyle: "none", margin: "0 auto" }}>
          {doctors?.length > 0 && doctors.map(result => (
            <Item key={result._id} result={result} />
          ))}
        </ul>
        {/* Properties available to access */}
        {/* result.name */}
        {/* result.title */}
        {/* result.description*/}
        {/* result.slug.current */}
        {/* result.specialty */}

      </div>
    </>
  )
}

const homeQuery = `*[_type == "doctor"] {
  _id,
  name,
  title,
  description,
  slug,
  bio,
  image,
  specialty,
}`

export async function getStaticProps() {
  const doctors = await sanityClient.fetch(homeQuery)
  return { props: { doctors } }
}

{/* <li key={result._id}>
  <div className={styles.wrap}>
    <div className={styles.photo}>
      <Image src={urlFor(result.image).url()} alt={result.name} width={300} height={440} />
    </div>
    <div className={styles.content}>
      <h2 className={styles.title}>{result.name}</h2>
      <p className={styles.description}>{result.description}</p>
      <div className={styles.btn}>
        <Link href={`/team/${result.slug.current}`}><button>Learn more</button></Link>
      </div>
    </div>
    <div className={styles.specialty}>{result.specialty}</div>
  </div>
</li> */}