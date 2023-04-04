import { PortableText, sanityClient, urlFor } from "../../lib/sanity";

const doctorQuery = `*[_type == "doctor" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  title,
  description,
  bio,
  image,
  speciality
}`

export default function OneRecipie({ data }) {
  const { doctorDetails } = data

  return (
    <article className="doctor">
      <h1>{doctorDetails.name}</h1>
      {/* <main className="content">
        <img src={urlFor(doctor?.mainImage).url()} alt={doctor.name} />
        <div className="breakdown">
          <ul className="ingredients">
            {doctor.ingredient?.map(ingredient => (
              <li key={ingredient._key} className="ingredient">
                {ingredient?.wholeNumber}
                {ingredient?.fraction}
                {" "}
                {ingredient?.unit}
                <br />
                {ingredient?.ingredient?.name}
              </li>
            ))}
          </ul>
          <div>
            <h3>Instructions here 👇</h3>
            <PortableText value={doctor?.instructions} className="instructions" />
          </div>
        </div>
      </main> */}
    </article>
  )
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    // we are using groq here because we can set the data structure we want for next.js directly into groq
    `*[_type == "doctor" && defined(slug.current)] {
      "params": {
        "slug": slug.current
      }
    }`
  )
  return {
    paths,
    // fallback will give 404 if there is path doesn't work. see more 
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  // this const { slug } is what our name of file for dynamic route is (i.e. [slug].js)
  // we can name it something else, but it would be for both filename and here
  const { slug } = params
  // we are passing the groq prams as an object in the second argument
  // this is the same params we are using in paths and bringing it here through destructuring
  // then using slug and passing it in sanityClient.fetch
  const doctorDetails = await sanityClient.fetch(doctorQuery, { slug })
  return { props: { data: { doctorDetails } } }
}