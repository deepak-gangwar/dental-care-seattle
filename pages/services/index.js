import styles from "@/styles/components/Service.module.scss"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

export default function Services() {
  return (
    <>
      <Head>
        <title>Services — Dental Care Seattle</title>
        <meta name="description" content="Our dentists offer full-service cosmetic dentistry including teeth whitening, Invisalign, porcelain veneers, smile design, and more at Dental Care Seattle on First Hill in Seattle, Washington.&nbsp;" />
      </Head>
      <div id='home' className="page">
        <header className={styles.hero}>

          {/* ===============  Content  =============== */}

          <h1 className={styles.h1}>Services</h1>
          <div className={styles.prev}></div>
          <div className={styles.next}></div>
          {/* Maybe change this to a list ul */}
          <div className={styles.items}>
            {/* Items are the number of instagram stories you want to add */}
            <div className={styles.item}>

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
            </div>
          </div>

          {/* ===============  Story Navigation  =============== */}
          <div className={styles.nav}>
            {/* Add as many buttons as there are posts */}
            <button aria-label="Cosmetic Dentistry" className={styles.button}>
              <div className={styles.indicator}></div>
            </button>
            <button aria-label="Restorative Dentistry" className={styles.button}>
              <div className={styles.indicator}></div>
            </button>
            <button aria-label="Preventative Dentistry" className={styles.button}>
              <div className={styles.indicator}></div>
            </button>
            <button aria-label="Invisalign" className={styles.button}>
              <div className={styles.indicator}></div>
            </button>
          </div>
        </header>


        {/* <h1>Services</h1>
        <section>
          <h2>Cosmetic Dentistry</h2>
          <p>
            Feeling good when you smile is a true asset. At Dental Care Seattle,
            cosmetic dentistry by our doctors can offer you a head-turning smile.
            Sometimes just a few minor changes make all the difference. In other
            cases, you may want to address many teeth. Bring us your concerns,
            and our doctors can plot the course for your ideal smile.
          </p>
        </section>
        <section>
          <h2>Restorative Dentistry</h2>
          <p>
            Our doctors have the right expertise and equipment to bring out the
            best in your smile! Restorative dentistry in our Seattle practice can
            replace and repair teeth, restore your ideal bite, and strengthen the
            integrity of your smile. Eating is one of life&apos;s greatest pleasures,
            but only when you have a healthy mouth — we&apos;re here to help you
            make a plan to restore your smile.
          </p>
        </section>
        <section>
          <h2>Preventative Dentistry</h2>
          <p>
            We&apos;re here to help you ensure your oral health for years to come.
            Our preventive dentistry services include regular dental cleanings,
            sealants, and any procedures used to slow and stop tooth decay or other
            oral diseases in their earliest stages. Our goal is to keep you and your
            mouth as healthy and clean as possible so you can maintain your natural
            teeth for life.
          </p>
        </section> */}
      </div>

    </>
  )
}