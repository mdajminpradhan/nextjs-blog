import Link from 'next/link'
import styles from '../styles/components/header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={`${styles.container} container`}>
        <div className={styles.header__left}>
          <h1 className="logo">Traveller!</h1>
        </div>
        <div className={styles.header__right}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
