import styles from './Hero.module.scss';

export default function Hero() {

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.text}></div>
                    <div className={styles.image}></div>
                </div>
                <div className={styles.attributes}></div>
            </div>
        </section>
    )
}