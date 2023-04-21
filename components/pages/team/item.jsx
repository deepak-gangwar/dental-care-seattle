import styles from './item.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'

export default function Item({ result }) {
  return (
    <li className={styles.item}>
      <div className={styles.wrap}>
        <div className={styles.photo}>
          {/* Make width 504 height 701 */}
          <Image src={urlFor(result.image).url()} alt={result.name} fill={true} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{result.name}</h2>
          <p className={styles.description}>{result.description}</p>

          {/* ========== Exo ape button component ========== */}

          <div className={styles.btn}>
            {/* <Link href={`/team/${result.slug.current}`}><button>Learn more</button></Link> */}
            <Link className={styles.link} href={`/team/${result.slug.current}`}>
              <div className={styles.wrap}>
                <div className={styles.circle}>
                  <div className={styles.circle_fill}></div>
                  <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className={styles.circle_outline}><circle cx="25" cy="25" r="23"></circle></svg>
                  <div className={styles.circle_icon}>
                    <svg viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" class={styles.icon_arrow}><path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z" fill="currentColor"></path></svg>
                  </div>
                </div>
                <div className={styles.label}>
                  Learn more
                  <div className={styles.border}></div>
                </div>
              </div>
            </Link>
          </div>

        </div>
        <div className={styles.specialty}>{result.specialty}</div>
      </div>
    </li>
  )
}