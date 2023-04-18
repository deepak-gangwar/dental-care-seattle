import styles from '@/styles/components/Navbar.module.scss'
import Link from "next/link"
import { useRouter } from 'next/router'

// Components
import ButtonPrimary from './buttonPrimary'

export default function Navbar() {
  // This is used to add --active className for the active page
  const router = useRouter()

  return (
    <nav id="nav" className={styles.nav} role="navigation" aria-label="main navigation">
      {/* TOP NAVBAR */}
      <header className={styles.header}>

        {/* Home Logo */}
        <Link href="/" className={styles.logo} aria-label="Dental Care Seattle">
          <svg id="dg-logo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="16.32" height="20" viewBox="0 0 16.32 20">
            <path d="M9.59.69V7.31A.69.69,0,0,1,8.91,8H6.2a.69.69,0,0,0-.69.69v2.62a.69.69,0,0,1-.68.69H2.12a.69.69,0,0,1-.69-.69V8.69A.69.69,0,0,1,2.12,8H4.83a.69.69,0,0,0,.68-.69V.69A.69.69,0,0,1,6.2,0H8.91A.69.69,0,0,1,9.59.69Z" transform="translate(-1.43 0)" style={{ fill: "#0d0e13" }} /><path d="M17.75,12.69v6.62a.69.69,0,0,1-.68.69H14.36a.69.69,0,0,1-.69-.69V12.69A.69.69,0,0,0,13,12H10.28a.69.69,0,0,1-.69-.69V8.69A.69.69,0,0,1,10.28,8H13a.69.69,0,0,1,.68.69v2.62a.69.69,0,0,0,.69.69h2.71A.69.69,0,0,1,17.75,12.69Z" transform="translate(-1.43 0)" style={{ fill: "#0d0e13" }} />
          </svg>

          {/* TODO: Use the following when you setup an svg logo in the spritesheet */}
          {/* <span id='nav-logo-svg'>
            <svg>
              <use xlink:href="#svg-logo-nav"></use>
            </svg>
          </span> */}
        </Link>


        {/* Links to other pages */}
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link type="page" href="/services" className={`underline ${styles.link} header__link${router.pathname == "/services" ? ' header__link--active' : ''}`} role="link" aria-label="Go to the services page">Services</Link>
            {/* <Link type="page" href="/services" className={`underline__link ${styles.link} ${router.pathname == "/services" ? ' header__link--active' : ''}`} role="link" aria-label="Go to the services page"><span className="underline__span">Services</span></Link> */}
          </li>
          <li className={styles.item}>
            <Link type="page" href="/team" className={`underline ${styles.link} header__link${router.pathname == "/team" ? ' header__link--active' : ''}`} role="link" aria-label="Go to our team page">Our Team</Link>
          </li>
          <li className={styles.item}>
            <Link type="page" href="/about" className={`underline ${styles.link} header__link${router.pathname == "/about" ? ' header__link--active' : ''}`} role="link" aria-label="Go to the about page">About Us</Link>
          </li>
          <li className={styles.item}>
            <Link type="page" href="/" className={`underline ${styles.link} header__link${router.pathname == "/about" ? ' header__link--active' : ''}`} role="link" aria-label="Go to the about page">Pay online</Link>
          </li>
          <li className={styles.item}>
            <Link type="page" href="/" className={`underline ${styles.link} header__link${router.pathname == "/about" ? ' header__link--active' : ''}`} role="link" aria-label="Go to the about page">Forms</Link>
          </li>
        </ul>

        {/* Menu button and Contact button at the end */}
        <div className={styles.btn}>
          {/* I have removed the menu button, need to add it later on for mobile devices */}
          {/* Update this button styles */}
          <ButtonPrimary path={"/contact"} />

        </div>
      </header>
    </nav>
  )
}