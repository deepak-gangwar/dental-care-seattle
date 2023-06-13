import styles from '@/styles/components/ButtonPrimary.module.scss'
import Link from "next/link"

export default function ButtonPrimary({ path, label, theme, pt }) {
  return (
    <>
      <Link href={path} className={pt ? 'js-pt' : undefined}>
        <button className={`${styles.button__primary} ${theme === "dark" ? styles.button__dark : styles.button__light}`} focusable="false" tabIndex="-1" aria-label="Contact us">
          <span className={styles.button__background}></span>
          <div className={styles.button__inner}>
            <span className={styles.button__label}>{label}</span>
            {/* TODO: Remove this svg from here and add it to the spritesheet and use xlink */}
            <svg className={styles.button__svg} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "translate(0px, 0px)" }}>
              {/* <use className='btn-circle' href="#btn-circle"></use> */}
              {/* <use className='btn-arrow' href="#btn-arrow"></use> */}
              <circle cx="14" cy="14" r="4"></circle>
              <path d="M17.896 16.028H16.776V12.012L10.424 18.38L9.64 17.58L15.992 11.228H11.976V10.108H17.896V16.028Z"></path>
            </svg>
          </div>
        </button>
      </Link>
    </>
  )
}