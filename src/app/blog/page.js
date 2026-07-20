import styles from './page.module.scss'
import Header from '@/components/Header/Header'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'

export default function Blog() {

    return (
        <div className={styles.blogPage}>
            <Header />
            <div className={styles.blogContainer}>
                <h1>BLOG PAGE</h1>
                <p>Articles publishing soon!</p>
            </div>
            <Contact />
            <Footer />
        </div>
    )

}