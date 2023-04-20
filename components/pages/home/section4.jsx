import Image from 'next/image'
import styles from './section4.module.scss'

export default function Section4() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2 className={styles.subheading}>
              <svg viewBox="0 0 12 12" fill="none" className={styles.icon}><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
              <span className={styles.label}>Bringing the best to you</span>
            </h2>
            <h3 className={styles.large__heading}>Our Partners</h3>


            {/* ================ PARTNERS MARQUEE STRIP ================ */}
            <svg className={styles.brush_face} xmlns="http://www.w3.org/2000/svg" width="383.27" height="188.33" viewBox="0 0 383.27 188.33">
              <path fill="#bfcbea" d="M133.62,177.47a228.42,228.42,0,0,1-107.38,7.7c-6.39-1.07-12.93-2.51-18.23-6.24s-9.09-10.3-7.74-16.64c1.79-8.38,11.07-12.63,19.37-14.75a129.55,129.55,0,0,1,86.12,8,83.7,83.7,0,0,1-46.85-47,83.62,83.62,0,0,1,2.91-66.3c6.8-13.83,20.54-26.79,35.7-24,12.47,2.29,20.69,14.29,25.42,26.05a112.1,112.1,0,0,1,6.95,57.43A80.18,80.18,0,0,1,144.21,29,80.2,80.2,0,0,1,212.6.32c16,1.51,32.37,8.78,40.76,22.52,9.35,15.33,6.73,36-3.32,50.88s-26.33,24.6-43.32,30.43A319.53,319.53,0,0,1,353.82,79c8.67.58,18.07,1.88,24.14,8.1,9.78,10,5,28.09-5.94,36.84s-25.68,10.7-39.61,12.34l-81.25,9.55c6.75-3.65,14-7.42,21.68-6.6s15,8.48,12.38,15.72c-2.36,6.61-10.65,8.5-17.62,9.38L159.64,178" />
              <path fill="#15161c" d="M100.73,150.2C124.32,168.38,156.88,174.07,185,164a90.82,90.82,0,0,0,55-57c.6-1.84-2.3-2.63-2.9-.8-8.33,25.57-28.77,46.72-54.33,55.36-27.19,9.2-58,3.49-80.61-13.95-1.53-1.18-3,1.43-1.51,2.59Z" />
              <path fill="#15161c" d="M226.8,99.44c.25,6.71,5.61,12.13,12.57,11.27C247,109.76,250,102,252,95.62c.58-1.85-2.32-2.64-2.89-.8-1.23,4-2.62,8.61-6.1,11.18-5.62,4.15-12.92.26-13.18-6.56-.07-1.92-3.07-1.93-3,0Z" />
              <path fill="#15161c" d="M138.35,105a4.46,4.46,0,0,1,1.72,7.34c-1.42,1.32.7,3.43,2.12,2.12,4-3.67,2.13-10.92-3.05-12.35a1.5,1.5,0,0,0-.79,2.89Z" />
              <path fill="#15161c" d="M165.45,96.4A8,8,0,0,0,167,109c1.69.94,3.21-1.65,1.52-2.59a5,5,0,0,1-1-7.85c1.41-1.33-.72-3.44-2.12-2.12Z" />
            </svg>

            <div className={styles.strip}>
              <Image className={styles.logo} src='/partners/wsd.png' alt='' width={120} height={120} />
              <Image className={styles.logo} src='/partners/skcds.png' alt='' width={120} height={120} />
              <Image className={styles.logo} src='/partners/mh.png' alt='' width={120} height={120} />
              <Image className={styles.logo} src='/partners/itero.png' alt='' width={120} height={120} />
              <Image className={styles.logo} src='/partners/invis.png' alt='' width={120} height={120} />
              <Image className={styles.logo} src='/partners/ada.png' alt='' width={120} height={120} />
              <Image className={styles.logo} src='/partners/zoom.png' alt='' width={120} height={120} />
              <Image className={styles.logo} src='/partners/wsd.png' alt='' width={120} height={120} />
              <Image className={styles.logo} src='/partners/skcds.png' alt='' width={120} height={120} />
              <Image className={styles.logo} src='/partners/mh.png' alt='' width={120} height={120} />
            </div>


            {/* ================ BODY CONTENT ================ */}

            {/* <p className={styles.paragraph}>
              Dental Care Seattle is a top-rated
              local practice for cosmetic, preventative,
              and restorative dentistry on First Hill.
            </p> */}
            {/* <p className={styles.description}>
              Visit us at our convenient office on Broadway and expect
              the best care, gentle treatment, and beautiful results from
              your dentist!
            </p> */}
          </div>
        </div>
      </div>
    </section>
  )
}