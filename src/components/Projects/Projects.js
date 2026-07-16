import styles from './Projects.module.scss';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {


    return (
        <section id='projects' className={styles.projects}>
            <div className={styles.container}>
                <div className={styles.columnOne}>
                    <Card className={`${styles.card} ${styles.cardTop} ${styles.cardOne}`}>
                        <div className={`${styles.cardText} ${styles.cardTextOne}`}>
                            <h2>PROJECTS</h2>
                            <p>View some of my projects.</p>
                        </div>
                    </Card>
                    <Card className={`${styles.card} ${styles.cardTwo} ${styles.card}`}>
                        <div className={styles.cardText}>
                            <p>Art Gallery</p>
                            <h4>Dweba Art</h4>
                            <Link href={'https://www.dwebaart.com/'} target='_blank'><Button variant='tertiary' size='xs' className={styles.btn}>View <FontAwesomeIcon className={styles.icon} icon={faArrowRight} /></Button></Link>
                        </div>
                    </Card>
                </div>
                <div className={styles.columnTwo}>
                    <Card className={`${styles.card} ${styles.cardTop} ${styles.cardThree}`}>
                        <div className={styles.cardText}>
                            <p>Hospitality</p>
                            <h4>Lindani BNB</h4>
                            <Link href={'https://www.lindanibnb.co.za/'} target='_blank'><Button variant='tertiary' size='xs' className={styles.btn}>View <FontAwesomeIcon className={styles.icon} icon={faArrowRight} /></Button></Link>
                        </div>
                    </Card>
                    <Card className={`${styles.card} ${styles.cardFour}`}>
                        <div className={styles.cardText}>
                            <p>Cosmetics</p>
                            <h4>Ness Salon</h4>
                            <Button variant='tertiary' size='xs' className={styles.btn}>View <FontAwesomeIcon className={styles.icon} icon={faArrowRight} /></Button>
                        </div>
                    </Card>
                </div>
            </div>
            <div className={styles.atumContainer}>
                <div className={styles.atumBgLeft}></div>
                <div className={styles.atumBgLeftMobile}></div>
                <div className={styles.atumProjectContent}>
                    <h3>Atum<span>.</span></h3>
                    <p>A software development & digital marketing agency.</p>
                    <Button>View Project</Button>
                </div>
                <div className={styles.atumBgRightMobile}></div>
                <div className={styles.atumBgRight}></div>
            </div>
        </section>
    )
}