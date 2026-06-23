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
                    <Card className={`${styles.card} ${styles.cardTop} ${styles.cardOne}`}>
                        <h2>PROJECTS</h2>
                        <p>View some of my projects.</p>
                    </Card>
                    <Card className={`${styles.card} ${styles.cardTwo} ${styles.card}`}>
                        <div className={styles.cardText}>
                            <h4>Dweba Art & Cafe</h4>
                            <p>Art Gallery</p>
                            <Button variant='tertiary' size='xs'>View <FontAwesomeIcon className={styles.icon} icon={faArrowRight} /></Button>
                        </div>
                    </Card>
                </div>
                <div className={styles.columnTwo}>
                    <Card className={`${styles.card} ${styles.cardTop} ${styles.cardThree}`}>
                        <div className={styles.cardText}>
                            <h4>Lindani BNB</h4>
                            <p>Hospitality</p>
                            <Button variant='tertiary' size='xs'>View <FontAwesomeIcon className={styles.icon} icon={faArrowRight} /></Button>
                        </div>
                    </Card>
                    <Card className={`${styles.card} ${styles.cardFour}`}>
                        <div className={styles.cardText}>
                            <h4>Ness Beauty Salon</h4>
                            <p>Cosmetics</p>
                            <Button variant='tertiary' size='xs'>View <FontAwesomeIcon className={styles.icon} icon={faArrowRight} /></Button>
                        </div>
                    </Card>
                </div>
            </div>
            <div className={styles.atumContainer}>
                <div className={styles.atumBgLeft}></div>
                <div className={styles.atumProjectContent}>
                    <h3>Atum<span>.</span></h3>
                    <p>A web development & digital marketing agency.</p>
                    <Button>View Project</Button>
                </div>
                <div className={styles.atumBgRight}></div>
            </div>
        </section>
    )
}