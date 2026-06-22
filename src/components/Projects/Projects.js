import styles from './Projects.module.scss';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {


    return (
        <section className={styles.projects}>
            <div className={styles.container}>
                <div className={styles.columnOne}>
                    <Card className={`${styles.card} ${styles.cardTop} ${styles.cardOne}`}></Card>
                    <Card className={`${styles.card} ${styles.cardTwo}`}></Card>
                </div>
                <div className={styles.columnTwo}>
                    <Card className={`${styles.card} ${styles.cardTop}`}></Card>
                    <Card className={styles.card}></Card>
                </div>
            </div>
        </section>
    )
}