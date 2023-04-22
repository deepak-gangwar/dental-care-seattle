import styles from './Service.module.scss'
import Link from 'next/link'

export default function Service({ isActive }) {
  return (
    <div className={`${styles.item} ${isActive ? styles.current?.trim() : ''}`}>
      {/* ============= PUBLISHER PROFILE ============= */}

      <div className={styles.publisher}>
        <picture type="image" className={styles.avatar}>
          {/* <Image src="" alt="avatar for cosmetic dentistry" /> */}
        </picture>
        <div className={styles.author}>
          <span className={styles.author_line}>Cosmetic Dentistry</span>
        </div>
      </div>


      {/* ============= POST ============= */}
      <div className={styles.post}>
        <a href="">
          <h2 className={styles.title}>
            {/* These are split text divs */}
            <div className={styles.title_mask}>
              <div className={styles.title_line}>At Dental Care Seattle, cosmetic</div>
            </div>
            <div className={styles.title_mask}>
              <div className={styles.title_line}>dentistry by our doctors can offer</div>
            </div>
            <div className={styles.title_mask}>
              <div className={styles.title_line}>you a head turning smile.</div>
            </div>
          </h2>
        </a>

        {/* Add the button component here */}
        <Link className={styles.link} href="">
          <div className={styles.wrap}>
            <div className={styles.circle}>
              <div className={styles.circle_fill}></div>
              <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className={styles.circle_outline}><circle cx="25" cy="25" r="23"></circle></svg>
              <div className={styles.circle_icon}>
                <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.icon_arrow}><path d="M7.8816 0L7.8958 6.67451H6.5893V2.24377L0.937271 7.91L0 6.97273L5.66623 1.3065H1.23549V0H7.8816Z" fill="currentColor"></path></svg>
              </div>
            </div>
            <div className={styles.label}>
              See all treatments
              <div className={styles.border}></div>
            </div>
          </div>
        </Link>
      </div>


      {/* ============= MEDIA ============= */}
      <div className={styles.media}></div>
    </div >
  )
}