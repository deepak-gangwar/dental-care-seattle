import styles from './item.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'

export default function Item({ result }) {
  return (
    <li className={styles.item}>
      {/* This is list item for each doctor, make this a component and pass in props */}
      <div className={styles.wrap}>
        <div className={styles.photo}>
          {/* Make width 504 height 701 */}
          <Image src={urlFor(result.image).url()} alt={result.name} fill={true} />
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
    </li>
  )
}