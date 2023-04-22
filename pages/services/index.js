import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <>
      <Head>
        <title>Services — Dental Care Seattle</title>
        <meta name="description" content="Our dentists offer full-service cosmetic dentistry including teeth whitening, Invisalign, porcelain veneers, smile design, and more at Dental Care Seattle on First Hill in Seattle, Washington.&nbsp;" />
      </Head>
      <div id='home' className='page'>
        <header className="hero">
          <h1 className="h1">Services</h1>
          <div className="prev"></div>
          <div className="next"></div>
          {/* Maybe change this to a list ul */}
          <div className="items">
            {/* Items are the number of instagram stories you want to add */}
            <div className="item">

              {/* ============= PUBLISHER PROFILE ============= */}

              <div className="publisher">
                <picture type="image" className="avatar">
                  {/* <Image src="" alt="avatar for cosmetic dentistry" /> */}
                </picture>
                <div className="author">
                  <span className="author_line">Cosmetic Dentistry</span>
                </div>
              </div>


              {/* ============= POST ============= */}
              <div className="post">
                <a href="">
                  <h2 className="title">
                    {/* These are split text divs */}
                    <div className="title_mask">
                      <div className="title_line">2 nominations for</div>
                    </div>
                    <div className="title_mask">
                      <div className="title_line">Exo Ape at Awwwards</div>
                    </div>
                    <div className="title_mask">
                      <div className="title_line">Annual Awards - The best</div>
                    </div>
                    <div className="title_mask">
                      <div className="title_line">of the web 2022</div>
                    </div>
                  </h2>
                </a>

                {/* Add the button component here */}
                <Link className="link" href="">
                  <div className="wrap">
                    <div className="circle">
                      <div className="circle_fill"></div>
                      <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="circle_outline"><circle cx="25" cy="25" r="23"></circle></svg>
                      <div className="circle_icon">
                        <svg viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon_arrow"><path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z" fill="currentColor"></path></svg>
                      </div>
                    </div>
                    <div className="label">
                      See all treatments
                      <div className="border"></div>
                    </div>
                  </div>
                </Link>
              </div>


              {/* ============= MEDIA ============= */}
              <div className="media"></div>
            </div>
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