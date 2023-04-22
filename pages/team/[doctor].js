import styles from '@/styles/components/Doctor.module.scss'
import Head from "next/head";
import { PortableText, sanityClient, urlFor } from "@/lib/sanity";
import Image from "next/image";

// Selecting doctor type document and matching the slug field with a variable 
// named $doctor we got from dynamic route.The $doctor variable is passed into 
// the sanityClient.fetch() method as a parameter in the second argument

const doctorQuery = `*[_type == "doctor" && slug.current == $doctor][0] {
  _id,
  name,
  slug,
  title,
  description,
  bio,
  image,
  specialty
}`


// MAIN DOCTOR PAGE COMPONENT
// ==========================

export default function DoctorPage({ data }) {
  const { currentDoctor } = data

  return (
    <>
      <Head>
        <title>{currentDoctor.title}</title>
        <meta name="description" content={currentDoctor.description} />
      </Head>
      <article className="doctor">
        <div className={styles.dots_w}>
          <div className={styles.dots}></div>
        </div>
        <Image src={urlFor(currentDoctor?.image).url()} alt={currentDoctor.name} width={300} height={440} />
        <h1>{currentDoctor.name}</h1>
        <span>Speciality - </span><span>{currentDoctor.specialty}</span>
        <br />
        <PortableText value={currentDoctor?.bio} />
      </article>
    </>

  )
}


// GET STATIC PATHS
// ================

// In the getStaticProps function in Next.js, we can access the dynamic route parameter values through the params object.
// By naming your file to be[doctor].js, you have set the route parameter to be named "doctor" thus params.doctor
// This parameter can then be accessed through the params object in the getStaticProps and getStaticPaths functions.

// `getStaticPaths` generates the list of paths for the dynamic routes. Required for SSG, not in SSR.

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    // we are using GROQ here because we can set the data structure we want for next.js directly into GROQ
    // in this case an array of objects with a property called params that is an object with our param doctor
    `*[_type == "doctor" && defined(slug.current)] {
      "params": {
        "doctor": slug.current
      }
    }`
  )
  return {
    paths,
    fallback: false
    // fallback true means if by chance the path is not contained in the 
    // list of dynamic paths, tell next.js to generate the page on fly.
    // If set to false, will give 404 for undefined dynamic routes
  }
}


// EXPLANATION OF THE ABOVE FUNCTION
// =================================

// `&& defined(slug.current)` is a filter in the GROQ query used
// in the getStaticPaths function to ensure that only documents that
// have a defined slug.current value are included in the paths array.

// If a document doesn't have a slug.current value, it can't be used
// to generate a dynamic route, so including this filter ensures that
// only valid dynamic routes are generated.

// Thus in the query, we are looking for "doctor" type documents, but with a defined slug value
// then we are mapping over this data and returning an array of objects that contain the params
// for dynamic routes. Param name is doctor here, which corresponds to the filename [doctor].js



// GET STATIC PROPS
// ================
// fetching data for a specific doctor based on the value of the dynamic route parameter `doctor`

export async function getStaticProps({ params }) {
  // The const { doctor } is what our name of file for dynamic route is (i.e. [doctor].js)
  // We can name it something else, but it would be for both filename and here.
  const { doctor } = params
  // This second param is what we have written in the doctorQuery as $doctor
  const currentDoctor = await sanityClient.fetch(doctorQuery, { doctor })
  // passing in the slug of link cilcked as {doctor} which is assigned to $doctor because of GROQ
  // thus we fetch data of the doctor whose slug value is equal to the slug of link clicked.
  return { props: { data: { currentDoctor } } }
}

// EXPLANATION OF THE ABOVE FUNCTION
// =================================

// The params argument is an object that contains the parameters for the current request.
// When a user makes a request to a dynamic route, Next.js takes the URL and extracts the dynamic
// parameter values from it, and then passes this information to the params object which is made up
// of key value pairs.Keys would be the filename(i.e., [doctor].js), and the value is the extracted
// value(i.e., the slug of the doctor because that is what we put in href)

// Inside, we are destructuring the params object to get the doctor parameter value (equal to slug of
// link clicked) that was extracted from the URL by Next.js.We then use this value to query our Sanity
// database to retrieve the data for that specific doctor.Finally, we return an object with the data
// key containing the currentDoctor data, which is then passed to the Doctor component as props.