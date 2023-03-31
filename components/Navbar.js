import styles from '@/styles/components/Navbar.module.scss'
import Link from "next/link"

export default function Navbar() {
  return (
    <nav>
      <div className={styles.navigation}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/team">Team</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}