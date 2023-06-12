import styles from '@/styles/components/Footer.module.scss'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer_w}>

            {/* ============= TITLE ============= */}
            <div className={styles.top_w}>
                <div>
                    <h4 className={styles.title}>Dental Care</h4>
                    <p className={styles.subtitle}>First Hill x Seattle, Washington</p>
                </div>
                <svg className={styles.smile} xmlns="http://www.w3.org/2000/svg" width="142.74" height="122.91" viewBox="0 0 142.74 122.91">
                    <path d="M77.34,18.9l8.16-3.66c2.92-1.31,6.39-3.53,9.5-4.24,3.9-.9,4.4,1.47,6.15,4.64l4.79,8.65c1.87,3.38,7,.36,5.18-3-2.38-4.31-4.49-9-7.28-13.11-1.29-1.89-2.69-3.31-5-3.78-3.49-.69-6.93,1.45-10,2.84l-14.5,6.51c-3.52,1.58-.47,6.75,3,5.18Z" />
                    <path d="M34.15,21.41c4.9-4.13,9.78-9.44,15.22-12.82,1.53-1,3.7-2.21,5.65-.89.61.42,1.18,2.42,1.58,3.13a10.43,10.43,0,0,0,4.33,4.37c3.4,1.84,6.43-3.34,3-5.18s-3.55-6.38-6.54-8.61A7,7,0,0,0,50.2.67c-3,1.3-5.64,4.15-8.12,6.24L29.91,17.17c-3,2.49,1.3,6.72,4.24,4.24Z" />
                    <path d="M118.09,49a13.94,13.94,0,0,0,23.84,5.81c2.6-2.84-1.63-7.1-4.25-4.25-4.49,4.9-12,3.41-13.8-3.15-1-3.71-6.84-2.13-5.79,1.59Z" />
                    <path d="M.16,62.11C3.06,71,5.83,79.87,8.89,88.67c2.57,7.4,5.66,14.73,10.94,20.63C29.11,119.66,43.92,124,57.5,122.67c33.53-3.38,53.23-34.58,68.29-61.14,1.91-3.36-3.27-6.39-5.18-3-13.71,24.16-30.95,53-61,57.87-12.9,2.1-27.39-1.69-36-11.88-5-5.92-7.62-13.43-10-20.68C11,76.06,8.49,68.29,6,60.52c-1.2-3.66-7-2.09-5.79,1.59Z" />
                </svg>

            </div>


            {/* ============= SEPARATION ============= */}

            <div className={styles.separation}>
                <div className={styles.separation_line}></div>
                {/* <div className={styles.separation_arrow}>
                    <svg id="svg-curved-arrow-l" viewBox="0 0 22 25">
                        <path d="M19.6,1v14.2c0,2-1.6,3.6-3.6,3.6H3.6l2.9-2.9l-1-1L1,19.5L5.5,24l1-1l-2.9-2.9h12.6c2.7,0,4.8-2.2,4.8-4.8V1H19.6z"></path>
                    </svg>
                </div> */}
            </div>


            {/* ============= FOOTER TOP ============= */}

            <div className={styles.footer}>
                <div className={styles.footer_t}>

                    {/* --------- COLUMN 1 LINKS --------- */}

                    <div className={styles.footer_t_spi}>
                        {/* <span>Forms.</span>
                        <br />
                        <span>Pay Online.</span>
                        <br />
                        <span>Dental Emergencies.</span>
                        <br />
                        <span>FAQ.</span> */}
                        <Link className={styles.line_w} href='/forms'>
                            Forms.
                            <span className={`${styles.line} ${styles.line_1} ${styles.line_b0}`}></span>
                        </Link>
                        <Link className={styles.line_w} href='/payment'>
                            Pay Online.
                            <span className={`${styles.line} ${styles.line_1} ${styles.line_b0}`}></span>
                        </Link>
                        <Link className={styles.line_w} href='/emergencies'>
                            Dental Emergencies.
                            <span className={`${styles.line} ${styles.line_1} ${styles.line_b0}`}></span>
                        </Link>
                        <Link className={styles.line_w} href='/faq'>
                            FAQ.
                            <span className={`${styles.line} ${styles.line_1} ${styles.line_b0}`}></span>
                        </Link>
                    </div>


                    {/* --------- COLUMN 2 ADDRESSES --------- */}

                    <div className={styles.footer_t_contact}>
                        <div className={`${styles.circle} ${styles.circle_s}`}>1</div>
                        <a className={styles._tb} href='https://google.com' target="_blank">
                            <span>Dental Care Seattle</span>
                            <br />
                            <span>600 Broadway, Suite 330</span>
                            <br />
                            <span>Seattle, WA, 98122</span>
                        </a>
                        <div className={styles.footer_t_contact_phone}>United States</div>
                    </div>


                    {/* --------- COLUMN 3 ADDRESSES --------- */}

                    <div className={styles.footer_t_contact}>
                        {/* add class circle-s to it */}
                        <div className={`${styles.circle} ${styles.circle_s}`}>2</div>
                        <a className={styles._tb} href='https://google.com' target="_blank">
                            <span>Call or Text: (206) 325-0166</span>
                            <br />
                            <span>Fax: (206) 322-9345</span>
                        </a>
                        <div className={styles.footer_t_contact_phone}>smiles@dentalcareseattle.com</div>
                    </div>


                    {/* --------- COLUMN 4 LINKS --------- */}

                    <div className={styles.footer_t_link}>
                        <Link className={styles.line_w} href='/contact'>
                            Contact
                            <span className={`${styles.line} ${styles.line_1} ${styles.line_b0}`}></span>
                        </Link>
                        <Link className={styles.line_w} href='/careers'>
                            Careers
                            <span className={`${styles.line} ${styles.line_1} ${styles.line_b0}`}></span>
                        </Link>
                    </div>
                </div>


                {/* ============= FOOTER BOTTOM ============= */}
                <div className={styles.footer_b}>
                    <div className={styles.footer_b_copyright}>©2023 DCS. All rights reserved.</div>

                    {/* --------- SOCIAL LINKS --------- */}

                    <div className={styles.footer_b_social}>
                        <a href='https://twitter.com/mulickdds?lang=en' aria-label='Dental Care Seattle&apos; Twitter' target='_blank'>
                            <svg viewBox="0 0 50 46"><path d="M35,16.9c-0.7,0.3-1.5,0.5-2.4,0.6c0.8-0.5,1.5-1.3,1.8-2.2c-0.8,0.5-1.7,0.8-2.6,1c-0.7-0.8-1.8-1.3-3-1.3c-2.3,0-4.1,1.8-4.1,4c0,0.3,0,0.6,0.1,0.9c-3.4-0.2-6.4-1.8-8.5-4.2c-0.4,0.6-0.6,1.3-0.6,2c0,1.4,0.7,2.6,1.8,3.4c-0.7,0-1.3-0.2-1.9-0.5c0,0,0,0,0,0.1c0,2,1.4,3.6,3.3,4c-0.3,0.1-0.7,0.1-1.1,0.1c-0.3,0-0.5,0-0.8-0.1c0.5,1.6,2,2.8,3.8,2.8c-1.4,1.1-3.2,1.7-5.1,1.7c-0.3,0-0.7,0-1-0.1c1.8,1.1,4,1.8,6.3,1.8C28.8,31,33,24.8,33,19.5c0-0.2,0-0.3,0-0.5C33.8,18.4,34.5,17.7,35,16.9z"></path></svg>
                        </a>
                        <a href='https://www.facebook.com/DentalCareSeattle/' aria-label='Dental Care Seattle&apos; Facebook' target='_blank'>
                            <svg viewBox="0 0 39 46"><path d="M22,17.7h2V15h-2.8c-2,0-3.6,1.5-3.6,3.3v2.5H15v3h2.7V31h3.2v-7.3h2.6l0.4-3h-3.1v-2.1C20.9,18.1,21.4,17.7,22,17.7z"></path></svg>
                        </a>
                        <a href='https://www.linkedin.com/company/dental-care-seattle/' aria-label='Dental Care Seattle&apos; LinkedIn' target='_blank'>
                            <svg viewBox="0 0 47 46"><rect x="15.1" y="19.8" width="3.6" height="11.2"></rect><path d="M27.8,19.6c-2,0-3.1,1.1-3.6,1.8h-0.1L24,19.8h-3.2c0,1,0.1,2.2,0.1,3.6V31h3.6v-6.4c0-0.3,0-0.6,0.1-0.9c0.3-0.6,0.9-1.3,1.9-1.3c1.3,0,1.8,1,1.8,2.4V31H32v-6.6C32,21.1,30.2,19.6,27.8,19.6z"></path><path d="M16.9,15c-1.2,0-1.9,0.8-1.9,1.7c0,1,0.7,1.7,1.9,1.7c1.2,0,2-0.8,2-1.7C18.8,15.8,18.1,15,16.9,15z"></path></svg>
                        </a>
                        <a href='https://instagram.com' aria-label='Dental Care Seattle&apos; Instagram' target='_blank'>
                            <svg viewBox="0 0 46 46"><path d="M23,18.7c-1.1,0-2.2,0.4-3,1.2c-0.9,0.8-1.3,1.9-1.3,3.1c0,2.3,2,4.3,4.4,4.3c1.2,0,2.3-0.4,3.1-1.2c0.8-0.8,1.3-1.9,1.3-3c0-1.2-0.3-2.2-1.1-3C25.5,19.2,24.4,18.8,23,18.7z M23,25.8c-1.6,0-2.9-1.3-2.9-2.8c0-0.8,0.3-1.5,0.9-2.1c0.5-0.5,1.2-0.8,1.9-0.8c0,0,0.1,0,0.1,0c1,0,1.7,0.3,2.2,0.8c0.5,0.5,0.7,1.2,0.7,2C25.9,24.6,24.6,25.8,23,25.8z"></path><path d="M27.5,17.6c-0.6,0-1,0.4-1,1c0,0.5,0.5,1,1,1s1-0.4,1-1C28.5,18.1,28,17.6,27.5,17.6z"></path><path d="M26.3,15h-6.6c-2.6,0-4.7,2-4.7,4.6v6.9c0,2.5,2.1,4.6,4.7,4.6h6.6c2.6,0,4.7-2,4.7-4.6v-6.9C31,17,28.9,15,26.3,15z M29.8,26.4c0,1.9-1.6,3.4-3.5,3.4h-6.6c-1.9,0-3.5-1.5-3.5-3.4v-6.9c0-1.9,1.6-3.4,3.5-3.4h6.6c1.9,0,3.5,1.5,3.5,3.4V26.4z"></path></svg>
                        </a>
                    </div>


                    {/* --------- BACK TO TOP (IN DESKTOP VIEW) --------- */}

                    <div className={styles.footer_b_top}>
                        <div>Top</div>
                        <div>
                            <svg viewBox="0 0 20 32">
                                <polygon className={styles.footer_b_top_base} points="15,6 11.06,2.06 10.75,1.75 10.578,1.578 10,1 9.422,1.578 9.25,1.75 8.953,2.047 5,6 6.06,7.06 9.25,3.87 9.25,16 10.75,16 10.75,3.845 13.953,7.047"></polygon>
                                <polygon className={styles.footer_b_top_left} points="10,1 5,6 6.06,7.06 11.06,2.06 10.578,1.578"></polygon>
                                <polygon className={styles.footer_b_top_center} points="10,1 9.25,1.75 9.25,16 10.75,16 10.75,1.75"></polygon>
                                <polygon className={styles.footer_b_top_right} points="10,1 9.422,1.578 8.953,2.047 13.953,7.047 15,6"></polygon>
                            </svg>
                        </div>
                    </div>
                </div>
            </div >

        </footer >
    )
}