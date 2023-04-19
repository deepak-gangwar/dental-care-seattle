import Link from "next/link"
import { useRouter } from 'next/router'
import ButtonPrimary from './buttonPrimary'
import styles from '@/styles/components/Navbar.module.scss'


export default function Navbar() {
  // This is used to add --active className for the active page
  const router = useRouter()

  return (
    <nav id="nav" className={styles.nav} role="navigation" aria-label="main navigation">
      {/* TOP NAVBAR */}
      <header className={styles.header}>

        {/* Home Logo */}
        <Link href="/" className={styles.logo} aria-label="Dental Care Seattle">
          <svg>
            <use href="#svg-logo-nav"></use>
          </svg>
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
          {/* <li className={styles.item}>
            <Link type="page" href="/" className={`underline ${styles.link} header__link${router.pathname == "/about" ? ' header__link--active' : ''}`} role="link" aria-label="Go to the about page">Pay online</Link>
          </li>
          <li className={styles.item}>
            <Link type="page" href="/" className={`underline ${styles.link} header__link${router.pathname == "/about" ? ' header__link--active' : ''}`} role="link" aria-label="Go to the about page">Forms</Link>
          </li> */}
        </ul>

        {/* Menu button and Contact button at the end */}
        <div className={styles.btn}>
          {/* I have removed the menu button, need to add it later on for mobile devices */}
          <ButtonPrimary path={"/contact"} />
        </div>
      </header>
    </nav>
  )
}