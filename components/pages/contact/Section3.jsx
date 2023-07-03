import Image from 'next/image'
import styles from './Section3.module.scss'
import Link from 'next/link'

export default function Section3() {
  return (
    <>
      <section>
        <div className={styles.container}>

          {/* =========== CONTENT =========== */}


          <div className={styles.text}>
            <span className={styles.arrow}>
              <Image src="icons/icon-arrow-diagonal.svg" width={21} height={20} alt=''></Image>
            </span>
            <div className={styles.accent}></div>


            <div className={styles.left__content}>
              <h2 className={styles.label}>
                <span className={styles.subheading}>Contact details</span>
              </h2>

              <div className={styles.left__btn}>
                <a className={styles.link} href='mailto:smiles@dentalcareseattle.com' >
                  <div className={styles.wrap}>
                    <div className={styles.circle}>
                      <div className={styles.circle_fill}></div>
                      <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className={styles.circle_outline}><circle cx="25" cy="25" r="23"></circle></svg>
                      <div className={styles.circle_icon}>
                        <svg viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.icon_arrow}><path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z" fill="currentColor"></path></svg>
                      </div>
                    </div>
                    <div className={styles.btn_label}>
                      smiles@dentalcareseattle.com
                      <div className={styles.border}></div>
                    </div>
                  </div>
                </a>
              </div>

              <div className={styles.left__btn}>
                <a className={styles.link} href='tel:(206)3250166' >
                  <div className={styles.wrap}>
                    <div className={styles.circle}>
                      <div className={styles.circle_fill}></div>
                      <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className={styles.circle_outline}><circle cx="25" cy="25" r="23"></circle></svg>
                      <div className={styles.circle_icon}>
                        <svg viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.icon_arrow}><path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z" fill="currentColor"></path></svg>
                      </div>
                    </div>
                    <div className={styles.btn_label}>
                      Call or text: (206) 325-0166
                      <div className={styles.border}></div>
                    </div>
                  </div>
                </a>
              </div>

              <div className={styles.left__btn}>
                <a className={styles.link} href='tel:(206)3229345' >
                  <div className={styles.wrap}>
                    <div className={styles.circle}>
                      <div className={styles.circle_fill}></div>
                      <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className={styles.circle_outline}><circle cx="25" cy="25" r="23"></circle></svg>
                      <div className={styles.circle_icon}>
                        <svg viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.icon_arrow}><path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z" fill="currentColor"></path></svg>
                      </div>
                    </div>
                    <div className={styles.btn_label}>
                      Fax: (206) 322-9345
                      <div className={styles.border}></div>
                    </div>
                  </div>
                </a>
              </div>


              <h2 className={styles.label}>
                <span className={styles.subheading}>Address details</span>
              </h2>
              <div className={styles.body}>
                <p className={styles.paragraph}>
                  Dental Care Seattle <br />
                  600 Broadway, Suite 330 <br />
                  Seattle, WA, 98122
                </p>
              </div>


              <h2 className={styles.label}>
                <span className={styles.subheading}>Socials</span>
              </h2>
              <div className={styles.body}>
                <p className={styles.paragraph}>
                  <a href="https://twitter.com">Twitter</a><br />
                  <a href="https://pinterest.com">Pinterest</a><br />
                  <a href="https://facebook.com">Facebook</a>
                </p>
              </div>
            </div>


            <div className={styles.right__content}>
              <h2 className={styles.right__title}>
                Emergencies
              </h2>
              <div className={styles.right__body}>
                <p className={styles.paragraph}>
                  Call us for emergency dental treatment at our office in the 600 Broadway building on First Hill, with quick access to central Capitol Hill.
                </p>
              </div>


              <h2 className={styles.right__title}>
                Parking
              </h2>
              <div className={styles.right__body}>
                <p className={styles.paragraph}>
                  Parking is available in our building, with access at the bottom of Cherry Street on the North side. Street parking is also available on two hour parking meters on each street surrounding our location.
                </p>
              </div>


              <h2 className={styles.right__title}>
                Hours
              </h2>
              <div className={styles.days1}>
                <p className={styles.paragraph}>
                  Monday — 7am to 5pm<br />
                  Tuesday — 7am to 5pm<br />
                  Wednesday — 7am to 5pm<br />
                  Thursday — 7am to 5pm<br />
                </p>
              </div>
              <div className={styles.days2}>
                <p className={styles.paragraph}>
                  Friday — 7am to 3pm<br />
                  Saturday — Closed<br />
                  Sunday — Closed<br />
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}