import styles from '@/styles/components/Navbar.module.scss'
import Link from "next/link"
import { useRouter } from 'next/router'

export default function Navbar() {
  // This is used to add --active className for the active page
  const router = useRouter()

  return (
    <nav id="nav" className="nav" role="navigation" aria-label="main navigation">
      {/* TOP NAVBAR */}
      <header className="header">

        {/* Home Logo */}
        <Link href="/" className="header__logo" aria-label="Dental Care Seattle">
          Home
          {/* <svg id="nav-logo-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="16.32" height="20" viewBox="0 0 16.32 20"><title>DCS</title><path d="M9.59.69V7.31A.69.69,0,0,1,8.91,8H6.2a.69.69,0,0,0-.69.69v2.62a.69.69,0,0,1-.68.69H2.12a.69.69,0,0,1-.69-.69V8.69A.69.69,0,0,1,2.12,8H4.83a.69.69,0,0,0,.68-.69V.69A.69.69,0,0,1,6.2,0H8.91A.69.69,0,0,1,9.59.69Z" transform="translate(-1.43 0)" style="fill:#0d0e13" /><path d="M17.75,12.69v6.62a.69.69,0,0,1-.68.69H14.36a.69.69,0,0,1-.69-.69V12.69A.69.69,0,0,0,13,12H10.28a.69.69,0,0,1-.69-.69V8.69A.69.69,0,0,1,10.28,8H13a.69.69,0,0,1,.68.69v2.62a.69.69,0,0,0,.69.69h2.71A.69.69,0,0,1,17.75,12.69Z" transform="translate(-1.43 0)" style="fill:#0d0e13" /></svg> */}

          {/* TODO: Use the following when you setup an svg logo in the spritesheet */}
          {/* <span id='nav-logo-svg'>
            <svg>
              <use xlink:href="#svg-logo-nav"></use>
            </svg>
          </span> */}
        </Link>


        {/* Links to other pages */}
        <ul className="header__list">
          <li className="header__item underline__container">
            <Link type="page" href="/services" className={`underline__link header__link${router.pathname == "/services" ? ' header__link--active' : ''}`} role="link" aria-label="Go to the services page"><span className="underline__span">Services</span></Link>
          </li>
          <li className="header__item underline__container">
            <Link type="page" href="/team" className={`underline__link header__link${router.pathname == "/team" ? ' header__link--active' : ''}`} role="link" aria-label="Go to our team page"><span className="underline__span">Our Team</span></Link>
          </li>
          <li className="header__item underline__container">
            <Link type="page" href="/about" className={`underline__link header__link${router.pathname == "/about" ? ' header__link--active' : ''}`} role="link" aria-label="Go to the about page"><span className="underline__span">About Us</span></Link>
          </li>
        </ul>

        {/* Menu button and Contact button at the end */}
        <div className="header__buttons">
          {/* I have removed the menu button, need to add it later on for mobile devices */}
          {/* Update this button styles */}
          <Link href="/contact">
            {/* TODO: Make this into a separate button component because it will be used throughout the site. */}
            <button className="button__primary" focusable="false" tabIndex="-1" aria-label="Contact us">
              <span className="button__background"></span>
              {/* <div className="button__inner" style={{ transform: matrix(1, 0, 0, 1, 3.42087e-216, 6.60092e-217); }}> */}
              <div className="button__inner">
                <span className="button__label">Contact</span>
                {/* TODO: Remove this svg from here and add it to the spritesheet and use xlink */}
                <svg className="button__svg" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "translate(0px, 0px)" }}>
                  <circle cx="14" cy="14" r="4" stroke="#1c1c1c"></circle>
                </svg>
              </div>
            </button>
          </Link>
        </div>
      </header>
    </nav>
  )
}