'use client'
import { useState } from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* Logo */}


                {/* Desktop Navigation */}
                <nav className={styles.nav}>
                    <Link href="/#about" className={styles.navLink}>About</Link>
                    <Link href="/#projects" className={styles.navLink}>Projects</Link>
                    <Link href="/#contact" className={styles.navLink}>Contact</Link>
                    <Link href="/blogpage" className={styles.navLink}>Blog</Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={styles.menuBtn}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={isMenuOpen ? styles.active : ''}></span>
                    <span className={isMenuOpen ? styles.active : ''}></span>
                    <span className={isMenuOpen ? styles.active : ''}></span>
                </button>

                {/* Mobile Navigation */}
                <nav className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}>
                    <Link href="/" className={styles.mobileNavLink} onClick={toggleMenu}>
                        About
                    </Link>
                    <Link href="/#about" className={styles.mobileNavLink} onClick={toggleMenu}>
                        Projects
                    </Link>
                    <Link href="/services" className={styles.mobileNavLink} onClick={toggleMenu}>
                        Contact
                    </Link>
                    <Link href="/#contact" className={styles.mobileNavLink} onClick={toggleMenu}>
                        Blog 
                    </Link>
                </nav>
            </div>
        </header>
    )
}