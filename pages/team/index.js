import Link from "next/link"
import { sanityClient, urlFor } from "lib/sanity"
import Image from "next/image"

export default function Team({ results }) {
  return (
    <>
      <h1>Team</h1>
      <ul>
        {results?.length > 0 && results.map(result => (
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
            <span>Specialty - </span><span>{result.specialty}</span>
            <hr />
            <br />
            <br />
            <br />
            <br />
          </li>
        ))}
      </ul>
    </>
  )
}

const homeQuery = `*[_type == "doctor"] {
  _id,
  name,
  title,
  description,
  bio,
  image,
  specialty,
}`

export async function getStaticProps() {
  const results = await sanityClient.fetch(homeQuery)
  return { props: { results } }
}