import Image from "next/image"
import styles from './Hero.module.scss'

export default function Hero({ name, imgSrc, docName, specialty }) {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            <span data-split="hero-title">{name.split(' ')[0] + " " + name.split(' ')[1]}</span>
            {/* <span className={styles.line}></span> */}
            <br />
            <span data-split="hero-title">{name.split(' ')[2]}</span>
            {/* <span className={styles.line}></span> */}
          </h1>
          <span className={styles.arrow}>
            <Image className="arrow-icon" src="icons/icon-arrow-diagonal.svg" width={21} height={20} alt=''></Image>
          </span>
          {/* <p className={`js-split ${styles.paragraph}`}>
            Dental Emergency? We can help.
          </p> */}
          <div className={styles.profile__wrap} style={{ "left": `${name.split(' ')[2].length * 80}px` }}>
            <Image src={imgSrc} alt={docName} width={300} height={440} />
          </div>

          <div className={styles.specialty}>{specialty}</div>


          {/* ========== Exo ape button component ========== */}

          <div className={styles.btn}>
            {/* <Link href={`/team/${result.slug.current}`}><button>Learn more</button></Link> */}
            <a className={styles.link} href='tel:(206)325-0166' >
              <div className={styles.wrap}>
                <div className={styles.circle}>
                  <div className={styles.circle_fill}></div>
                  <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className={styles.circle_outline}><circle cx="25" cy="25" r="23"></circle></svg>
                  <div className={styles.circle_icon}>
                    <svg viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.icon_arrow}><path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z" fill="currentColor"></path></svg>
                  </div>
                </div>
                <div className={styles.btn_label}>
                  Schedule an appointment
                  <div className={styles.border}></div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="fouc-overlay"></div>
      </section>
      <div className={styles.separator}></div>
    </>
  )
}
