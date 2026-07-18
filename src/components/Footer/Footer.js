import styles from './Footer.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {

    return (
        <section className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.socialIcons}>
                    <Link href="https://github.com/Lebo-Madikane" target="_blank" rel="noopener noreferrer" className={styles.icons}><FontAwesomeIcon className={styles.icon} icon={faGithub} /></Link>
                    <Link href="https://www.linkedin.com/in/lebo-madikane/" target="_blank" rel="noopener noreferrer" className={styles.icons}><FontAwesomeIcon className={styles.icon} icon={faLinkedin} /></Link>
                    <Link href="https://twitter.com/Madikane_Lebo" target="_blank" rel="noopener noreferrer" className={styles.icons}><FontAwesomeIcon className={styles.icon} icon={faXTwitter} /></Link>
                    <Link href="https://www.instagram.com/lebo_madikane/" target="_blank" rel="noopener noreferrer" className={styles.icons}><FontAwesomeIcon className={styles.icon} icon={faInstagram} /></Link>
                </div>
                <div>
                    <div className={styles.footerNav}>
                        <Link href="#hero" className={styles.links}>Home</Link>
                        <Link href="#projects" className={styles.links}>Projects</Link>
                        <Link href="mailto:madikanelebohang@gmail.com" className={styles.links}>Email</Link>
                        <Link href="/blog" target="_blank" rel="noopener noreferrer" className={styles.links}>Blog</Link>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <p>Copyright<FontAwesomeIcon className={styles.icon} icon={faCopyright} /> 2024 | Lebo Madikane</p>
                </div>
            </div>
        </section>
    )
}