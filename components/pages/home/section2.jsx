import styles from './section2.module.scss'

export default function Section2() {
    return (
        <section className={styles.carousel}>

            {/* ================ SUBHEADING ================ */}
            <div className={styles.subheadingWrapper}>
                <div className={styles.subheading}>
                    <svg viewBox="0 0 12 12" fill="none" className={styles.subheadingIcon}><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
                    <span className={styles.subheadingLabel}>3 steps to results</span>
                </div>
                <div className={styles.headingLarge}>
                    <h3>We work with the best, for you.</h3>
                </div>
            </div>

            {/* ================ NUMBERS ================ */}

            <div className={styles.numbersWrapper}>
                {/* Make this into another component */}
                <div className={styles.numbers}>
                    <div className={styles.number}>
                        <svg width="544" height="724" viewBox="0 0 544 724" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M261.665 197.39C248.085 209.677 229.655 218.083 206.375 222.61C183.095 227.137 154.641 229.4 121.015 229.4V144.04C159.815 142.747 190.531 137.897 213.165 129.49C235.798 121.083 252.288 108.797 262.635 92.6299C272.981 75.8166 279.771 53.1833 283.005 24.7299H366.425V695H261.665V197.39Z" fill="#E7E6E9"></path></svg>
                    </div>
                    <div className={styles.number}>
                        <svg width="544" height="724" viewBox="0 0 544 724" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.8516 695C25.8516 654.26 33.6116 616.753 49.1316 582.48C65.2982 548.207 88.2549 516.843 118.002 488.39C147.748 459.29 185.255 430.513 230.522 402.06C240.222 396.24 249.922 390.42 259.622 384.6C297.128 361.967 324.935 343.86 343.042 330.28C361.795 316.053 376.022 299.887 385.722 281.78C396.068 263.673 401.242 241.687 401.242 215.82C401.242 194.48 397.685 175.403 390.572 158.59C384.105 141.777 372.465 128.197 355.652 117.85C339.485 106.857 316.852 101.36 287.752 101.36C254.125 101.36 226.965 108.15 206.272 121.73C186.225 134.663 171.675 153.093 162.622 177.02C154.215 200.3 150.012 228.43 150.012 261.41H43.3116C43.3116 212.263 52.3649 168.937 70.4716 131.43C88.5782 93.9233 116.062 64.5 152.922 43.16C189.782 21.82 235.695 11.15 290.662 11.15C331.402 11.15 368.262 19.2333 401.242 35.4C434.868 50.92 461.382 73.8766 480.782 104.27C500.182 134.663 509.882 170.553 509.882 211.94C509.882 250.74 500.828 285.337 482.722 315.73C465.262 346.123 443.275 371.99 416.762 393.33C390.248 414.67 357.268 437.303 317.822 461.23L308.122 468.02L298.422 472.87C273.202 487.743 251.862 501.323 234.402 513.61C217.588 525.897 202.392 539.477 188.812 554.35C175.878 569.223 166.502 585.39 160.682 602.85V604.79H502.122V695H25.8516Z" fill="#E7E6E9"></path></svg>
                    </div>
                    <div className={styles.number}>
                        <svg width="544" height="724" viewBox="0 0 544 724" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M282.237 708.58C225.33 708.58 176.507 699.203 135.767 680.45C95.6738 661.05 64.9571 633.243 43.6171 597.03C22.9238 560.817 12.5771 517.167 12.5771 466.08H119.277C119.277 498.413 124.127 525.897 133.827 548.53C144.174 570.517 160.987 587.653 184.267 599.94C207.547 612.227 237.94 618.37 275.447 618.37C309.72 618.37 337.204 614.167 357.897 605.76C379.237 596.707 394.434 583.773 403.487 566.96C412.541 549.5 417.067 528.483 417.067 503.91C417.067 474.81 410.924 451.853 398.637 435.04C386.35 418.227 370.184 406.587 350.137 400.12C330.737 393.007 308.427 389.45 283.207 389.45H220.157V303.12H279.327C302.607 303.12 322.654 299.563 339.467 292.45C356.927 285.337 370.184 274.02 379.237 258.5C388.937 242.98 393.787 223.58 393.787 200.3C393.787 181.547 389.907 164.733 382.147 149.86C374.387 134.987 361.777 123.347 344.317 114.94C327.504 105.887 305.84 101.36 279.327 101.36C226.947 101.36 190.087 113 168.747 136.28C148.054 158.913 137.707 188.983 137.707 226.49H31.0071C31.0071 184.457 40.3838 147.273 59.1372 114.94C78.5372 82.6066 106.667 57.3866 143.527 39.2799C181.034 20.5266 226.624 11.15 280.297 11.15C320.39 11.15 357.25 18.5866 390.877 33.46C425.151 47.6866 452.31 68.7033 472.357 96.5099C492.404 124.317 502.427 157.297 502.427 195.45C502.427 230.37 493.697 259.793 476.237 283.72C459.424 307 434.527 325.43 401.547 339.01V340.95C444.227 354.53 475.59 375.223 495.637 403.03C515.684 430.837 525.707 465.11 525.707 505.85C525.707 548.53 515.684 585.067 495.637 615.46C476.237 645.853 448.107 669.133 411.247 685.3C374.387 700.82 331.384 708.58 282.237 708.58Z" fill="#E7E6E9"></path></svg>
                    </div>
                </div>
            </div>

            {/* ================ INDICATOR ================ */}

            <div className={styles.indicator}>
                {/* Make this into another component */}
                <div className={styles.container}>
                    <span className={styles.background}></span>
                    <span className={styles.highlight}></span>
                    <span className={styles.label}>3</span>
                </div>
            </div>


            {/* ================ CONTENT ================ */}
            <div className={styles.content}>
                <ul className={styles.list}>
                    {/* Make this into another component */}
                    <li className={styles.item}>
                        <h3 className={styles.heading}>
                            {/* this and all other content is to be pushed into split text somehow so that they play that animaiton every time the are scrolled into view */}
                            <span>Tight schedule? No worries!</span>
                        </h3>
                        <svg className={styles.icon} width="9" height="10" viewBox="0 0 9 10" xmlns="http://www.w3.org/2000/svg"><path d="M2.624 7.904H6.592L0.416 1.744L1.328 0.816L7.472 6.992V3.04L8.736 3.024V9.136H2.624V7.904Z"></path></svg>
                        <div className={styles.paragraph}>
                            {/* Add split text to this as well */}
                            <p>We offer comprehensive dentistry five days a week, and are ready for emergency treatment when you need it.</p>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <h3 className={styles.heading}>
                            {/* this and all other content is to be pushed into split text somehow so that they play that animaiton every time the are scrolled into view */}
                            <span>Committed to safety</span>
                        </h3>
                        <svg className={styles.icon} width="9" height="10" viewBox="0 0 9 10" xmlns="http://www.w3.org/2000/svg"><path d="M2.624 7.904H6.592L0.416 1.744L1.328 0.816L7.472 6.992V3.04L8.736 3.024V9.136H2.624V7.904Z"></path></svg>
                        <div className={styles.paragraph}>
                            {/* Add split text to this as well */}
                            <p>With health screening, sanitization, enhanced PPE, and more we&apos;re prioritizing your safety at every step.</p>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <h3 className={styles.heading}>
                            {/* this and all other content is to be pushed into split text somehow so that they play that animaiton every time the are scrolled into view */}
                            <span>Smile without stress</span>
                        </h3>
                        <svg className={styles.icon} width="9" height="10" viewBox="0 0 9 10" xmlns="http://www.w3.org/2000/svg"><path d="M2.624 7.904H6.592L0.416 1.744L1.328 0.816L7.472 6.992V3.04L8.736 3.024V9.136H2.624V7.904Z"></path></svg>
                        <div className={styles.paragraph}>
                            {/* Add split text to this as well */}
                            <p>You&apos;ll love your smile and your visit, too! Our friendly team will help you leave feeling comfortable and confident.</p>
                        </div>
                    </li>
                </ul>
            </div>

        </section>
    )
}