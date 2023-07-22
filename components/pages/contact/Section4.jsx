import Link from 'next/link'
import styles from './Section4.module.scss'
import Image from 'next/image'

export default function Section4() {
  return (
    <>
      <section className={styles.contact__form}>
        <div className={styles.container}>

          {/* =========== CONTENT =========== */}

          <div className={styles.text}>
            <h2 className={styles.label}>
              <svg viewBox="0 0 12 12" fill="none" className={styles.icon}><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
              <span className={styles.subheading}>Get in touch</span>
            </h2>
            <h2 className={styles.title}>
              Kindly fill the form
            </h2>

            <form className={styles.form__left}>
              <label htmlFor="full-name" className={styles.input__container}>
                <span className={styles.input__before}>01</span>
                <span className={styles.input__label}>What&apos;s your full name? *</span>
                <input className={styles.input__field} id="full-name" name="name" type="text" placeholder="John Doe" required={true} autoComplete='true' />
                <span className={styles.input__border}></span>
              </label>

              <label htmlFor="email" className={styles.input__container}>
                <span className={styles.input__before}>02</span>
                <span className={styles.input__label}>What&apos;s your email? *</span>
                <input className={styles.input__field} id="email" name="email" type="email" placeholder="johndoe@company.com" required={true} autoComplete='true' />
                <span className={styles.input__border}></span>
              </label>

              <label htmlFor="phone" className={styles.input__container}>
                <span className={styles.input__before}>03</span>
                <span className={styles.input__label}>What&apos;s your phone? *</span>
                <input className={styles.input__field} id="phone" name="phone" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="(###) ### ####" required={true} autoComplete='true' />
                <span className={styles.input__border}></span>
              </label>

              <label htmlFor="reach" className={styles.input__container}>
                <span className={styles.input__before}>04</span>
                <span className={styles.input__label}>How should we reach you?</span>
                <input className={`${styles.input__field} ${styles.input__dummy}`} id="reach" name="reach" type="text" placeholder="Let us know how to get back to you." disabled={true} />
                <input className={`${styles.input__field} ${styles.input__dummy}`} id="reach2" name="reach" type="text" placeholder="We'll be in touch by the next business day." disabled={true} />

                <div className={styles.input__radios}>
                  <div className={styles.radio__wrap}>
                    <input className={styles.radio__ip} type="radio" id="reach-via-call" name="contact" value="call" />
                    <label className={styles.radio__label} htmlFor="reach-via-call">Call me</label>
                  </div>
                  <div className={styles.radio__wrap}>
                    <input className={styles.radio__ip} type="radio" id="reach-via-text" name="contact" value="text" />
                    <label className={styles.radio__label} htmlFor="reach-via-text">Text me</label>
                  </div>
                  <div className={styles.radio__wrap}>
                    <input className={styles.radio__ip} type="radio" id="reach-via-email" name="contact" value="email" />
                    <label className={styles.radio__label} htmlFor="reach-via-email">Email me</label>
                  </div>
                </div>

                <span className={styles.input__border}></span>
              </label>
            </form>

            <form className={styles.form__right}>
              <label htmlFor="seen" className={styles.input__container}>
                <span className={styles.input__before}>05</span>
                <span className={styles.input__label}>Have we seen you before? *</span>
                <input className={`${styles.input__field} ${styles.input__dummy}`} id="seen" name="seen" type="text" placeholder="This helps us understand if this will be your" disabled={true} />
                <input className={`${styles.input__field} ${styles.input__dummy}`} id="seen2" name="seen2" type="text" placeholder="first visit or a follow up appointment." disabled={true} />

                <div className={styles.input__radios}>
                  <div className={styles.radio__wrap}>
                    <input className={styles.radio__ip} type="radio" id="new-patient" name="new-patient" value="new-patient" />
                    <label className={styles.radio__label} htmlFor="new-patient">I am a new patient</label>
                  </div>
                  <div className={styles.radio__wrap}>
                    <input className={styles.radio__ip} type="radio" id="returning-patient" name="returning-patient" value="returning-patient" />
                    <label className={styles.radio__label} htmlFor="returning-patient">I am a returning patient</label>
                  </div>
                </div>

                <span className={styles.input__border}></span>
              </label>

              <label htmlFor="doctor-select" className={styles.input__container}>
                <span className={styles.input__before}>06</span>
                <span className={styles.input__label}>Which doctor you&apos;d like to see?</span>
                <select className={styles.input__select} name="doctors" id="doctor-select">
                  <option value="">No preference</option>
                  <option value="michael-mulick">Dr Michael Mulick</option>
                  <option value="nick-radandt">Dr Nick Radandt</option>
                  <option value="shana-reidy">Dr Shana Reidy</option>
                  <option value="brigitte-higgins">Dr Brigitte Higgins</option>
                  <option value="jake-ericksen">Dr Jake Ericksen</option>
                </select>
                <span className={styles.input__border}></span>
              </label>

              <label htmlFor="hear-about-us" className={styles.input__container}>
                <span className={styles.input__before}>07</span>
                <span className={styles.input__label}>How did you hear about us?</span>
                <select className={styles.input__select} name="hear-about-us" id="hear-about-us">
                  <option value="friend-family">Referral from friend/family</option>
                  <option value="another-practice">Referral from another practice</option>
                  <option value="web-search">Web Search</option>
                  <option value="facebook">Facebook</option>
                  <option value="advertisement">I saw an advertisement</option>
                  <option value="current-patient">I am a current patient</option>
                  <option value="other">Other</option>
                </select>
                <span className={styles.input__border}></span>
              </label>

              <label className={styles.input__container} htmlFor="form-message">
                <span className={styles.input__before}>08</span>
                <span className={styles.input__label}>Your message *</span>
                <textarea className={styles.input__textarea} name="message" id="form-message" placeholder="I&apos;d like to know about..." required={true} ></textarea>
                {/* <span className={styles.input__border}></span> */}
              </label>
            </form>

            <Link className={`js-pt ${styles.hiring__wrap}`} href='/careers'>
              <h2 className={styles.hiring__heading}>We&apos;re hiring!</h2>
              <p className={styles.hiring__para}>Visit our Careers page to explore opportunities to join our team.</p>
              <span className={styles.arrow}>
                <Image src="icons/icon-arrow-diagonal.svg" width={21} height={20} alt=''></Image>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}