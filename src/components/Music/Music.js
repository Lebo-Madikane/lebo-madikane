import styles from './Music.module.scss';

export default function Music() {

    return (
        <section className={styles.musicSection}>
            <div className={styles.container}>
                <span className={styles.statementRight}>Curated Deep & Afro-house Music</span>
                <div className={styles.content}>
                    <div className={styles.contentContainer}>
                        <div className={styles.header}></div>
                        <div className={styles.images}></div>
                        <div className={styles.cta}></div>
                    </div>
                </div>
                <span className={styles.statementLeft}>Curated Deep & Afro-house Music</span>
            </div>
        </section>
    );
}