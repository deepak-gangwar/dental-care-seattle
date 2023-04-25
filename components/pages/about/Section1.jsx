import Image from 'next/image'
import styles from './Section1.module.scss'

export default function Section1() {
  return (
    <>
      <div className={styles.flush_image}>
        <Image src="/about1.jpg" alt='' fill={true} />
      </div>
      <section className={styles.services}>
        <div className={styles.container}>

          {/* =========== IMAGES =========== */}

          <ul className={styles.images}>
            <li className={styles.image}>
              <picture type="image">
                <source type="image/webp" srcset="https://img2.storyblok.com/350x495/filters:format(webp):quality(70)/f/133769/1500x2123/637f850b2b/exo-ape-studio-collage-1.jpg 350w, https://img2.storyblok.com/450x637/filters:format(webp):quality(70)/f/133769/1500x2123/637f850b2b/exo-ape-studio-collage-1.jpg 450w, https://img2.storyblok.com/650x920/filters:format(webp):quality(70)/f/133769/1500x2123/637f850b2b/exo-ape-studio-collage-1.jpg 650w" sizes="(max-width: 1024px) 350px, (max-width: 1280px) 450px, 650px"></source>
                <img src="https://img2.storyblok.com/650x920/filters:format(jpeg):quality(70)/f/133769/1500x2123/637f850b2b/exo-ape-studio-collage-1.jpg" srcset="https://img2.storyblok.com/350x495/filters:format(jpeg):quality(70)/f/133769/1500x2123/637f850b2b/exo-ape-studio-collage-1.jpg 350w, https://img2.storyblok.com/450x637/filters:format(jpeg):quality(70)/f/133769/1500x2123/637f850b2b/exo-ape-studio-collage-1.jpg 450w, https://img2.storyblok.com/650x920/filters:format(jpeg):quality(70)/f/133769/1500x2123/637f850b2b/exo-ape-studio-collage-1.jpg 650w" sizes="(max-width: 1024px) 350px, (max-width: 1280px) 450px, 650px" width="1500" height="2123" alt="exo ape" loading="lazy"></img>
              </picture>
            </li>
            <li className={styles.image}>
              <picture type="image">
                <source type="image/webp" srcset="https://img2.storyblok.com/350x234/filters:format(webp):quality(70)/f/133769/1500x1003/2581b1d31d/exo-ape-studio-collage-2.jpg 350w, https://img2.storyblok.com/450x301/filters:format(webp):quality(70)/f/133769/1500x1003/2581b1d31d/exo-ape-studio-collage-2.jpg 450w, https://img2.storyblok.com/650x435/filters:format(webp):quality(70)/f/133769/1500x1003/2581b1d31d/exo-ape-studio-collage-2.jpg 650w" sizes="(max-width: 1024px) 350px, (max-width: 1280px) 450px, 650px"></source>
                <img src="https://img2.storyblok.com/650x435/filters:format(jpeg):quality(70)/f/133769/1500x1003/2581b1d31d/exo-ape-studio-collage-2.jpg" srcset="https://img2.storyblok.com/350x234/filters:format(jpeg):quality(70)/f/133769/1500x1003/2581b1d31d/exo-ape-studio-collage-2.jpg 350w, https://img2.storyblok.com/450x301/filters:format(jpeg):quality(70)/f/133769/1500x1003/2581b1d31d/exo-ape-studio-collage-2.jpg 450w, https://img2.storyblok.com/650x435/filters:format(jpeg):quality(70)/f/133769/1500x1003/2581b1d31d/exo-ape-studio-collage-2.jpg 650w" sizes="(max-width: 1024px) 350px, (max-width: 1280px) 450px, 650px" width="1500" height="1003" alt="exo ape" loading="lazy"></img>
              </picture>
            </li>
            <li className={styles.image}>
              <picture type="image">
                <source type="image/webp" srcset="https://img2.storyblok.com/350x498/filters:format(webp):quality(70)/f/133769/569x809/dd3f38466e/exo-ape-studio-collage-3.jpg 350w, https://img2.storyblok.com/450x640/filters:format(webp):quality(70)/f/133769/569x809/dd3f38466e/exo-ape-studio-collage-3.jpg 450w, https://img2.storyblok.com/650x924/filters:format(webp):quality(70)/f/133769/569x809/dd3f38466e/exo-ape-studio-collage-3.jpg 650w" sizes="(max-width: 1024px) 350px, (max-width: 1280px) 450px, 650px"></source>
                <img src="https://img2.storyblok.com/650x924/filters:format(jpeg):quality(70)/f/133769/569x809/dd3f38466e/exo-ape-studio-collage-3.jpg" srcset="https://img2.storyblok.com/350x498/filters:format(jpeg):quality(70)/f/133769/569x809/dd3f38466e/exo-ape-studio-collage-3.jpg 350w, https://img2.storyblok.com/450x640/filters:format(jpeg):quality(70)/f/133769/569x809/dd3f38466e/exo-ape-studio-collage-3.jpg 450w, https://img2.storyblok.com/650x924/filters:format(jpeg):quality(70)/f/133769/569x809/dd3f38466e/exo-ape-studio-collage-3.jpg 650w" sizes="(max-width: 1024px) 350px, (max-width: 1280px) 450px, 650px" width="569" height="809" alt="exo ape" loading="lazy"></img>
              </picture>
            </li>
          </ul>


          {/* =========== CONTENT =========== */}

          <div className={styles.text}>
            <h2 className={styles.label}>
              <svg viewBox="0 0 12 12" fill="none" className={styles.icon}><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
              <span className={styles.subheading}>About us</span>
            </h2>
            <h2 className={styles.title}>
              Dental Care Seattle is a top-rated local practice for cosmetic, preventative, and restorative dentistry on First Hill.
            </h2>
            <div className={styles.body}>
              {/* this is changed here */}
              <p className={styles.paragraph}>
                Visit us at our convenient office on
                <br />
                Broadway and expect the best care,
                <br />
                gentle treatment, and beautiful
                <br />
                results from your dentist!
                {/* Interior Design and Furniture */}
                {/* Architecture and Real Estate */}
                {/* Hospitality, Travel & tourism. */}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.separator}></div>
    </>
  )
}