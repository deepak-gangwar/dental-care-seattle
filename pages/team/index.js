import Head from "next/head"
import Link from "next/link"
import { sanityClient, urlFor } from "lib/sanity"
import Image from "next/image"
import Hero from "@/component/pages/team/hero"

export default function Team({ doctors }) {
  return (
    <>
      <Head>
        <title>Meet Your Dentists — Dental Care Seattle</title>
        <meta name="description" content="Our team of friendly, gentle dentists at Dental Care Seattle." />
      </Head>
      <div id='team' className='page'>
        <Hero />
        <h1>Team</h1>
        <ul>
          {doctors?.length > 0 && doctors.map(result => (
            <li key={result._id}>
              {/* Note: To render bio correctly, you would need to use portable text, for that you have to watch kapehe's rest of the video */}
              <Image src={urlFor(result.image).url()} alt={result.name} width={300} height={440} />
              <br />
              <span>Name - </span><span>{result.name}</span>
              <br />
              <span>Title - </span><span>{result.title}</span>
              <br />
              <span>Description - </span><span>{result.description}</span>
              <br />
              <span>Slug - </span><span>{result.slug.current}</span>
              <br />
              <span>Specialty - </span><span>{result.specialty}</span>
              <br />
              <br />
              <Link href={`/team/${result.slug.current}`}><button>Learn more</button></Link>
              <hr />
              <br />
              <br />
              <br />
              <br />
            </li>
          ))}
        </ul>
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