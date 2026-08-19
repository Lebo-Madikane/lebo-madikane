import styles from './Projects.module.scss';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";

export default function Projects() {


    return (
        <motion.section id='projects' className={styles.projects}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
        >
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
                            <h4>Art & Events</h4>
                            <Link href={'https://www.dwebaart.com/'} target='_blank'><Button variant='tertiary' size='xs' className={styles.btn}>View <FontAwesomeIcon className={styles.icon} icon={faArrowRight} /></Button></Link>
                        </div>
                    </Card>
                </div>
                <div className={styles.columnTwo}>
                    <Card className={`${styles.card} ${styles.cardTop} ${styles.cardThree}`}>
                        <div className={styles.cardText}>
                            <p>Cosmetics</p>
                            <h4>Hair Salon</h4>
                            <Link href={'https://ness-beauty-salon-rho.vercel.app/'} target='_blank'><Button variant='tertiary' size='xs' className={styles.btn}>View <FontAwesomeIcon className={styles.icon} icon={faArrowRight} /></Button></Link>
                        </div>
                    </Card>
                    <Card className={`${styles.card} ${styles.cardFour}`}>
                        <div className={styles.cardText}>
                            <p>Hospitality</p>
                            <h4>B&B</h4>
                            <Link href={'https://www.lindanibnb.co.za/'} target='_blank'><Button variant='tertiary' size='xs' className={styles.btn}>View <FontAwesomeIcon className={styles.icon} icon={faArrowRight} /></Button></Link>
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
                    <Link href={'https://atum-iota.vercel.app/'} target='_blank'><Button>View Project</Button></Link>
                </div>
                <div className={styles.atumBgRightMobile}></div>
                <div className={styles.atumBgRight}></div>
            </div>
        </motion.section>
    )
}