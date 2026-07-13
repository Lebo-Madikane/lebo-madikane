'use client';

import styles from './Hero.module.scss';
import Button from '../UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBurst } from "@fortawesome/free-solid-svg-icons";

export default function Hero({ onContactClick }) {

    const attri = [
        { id: 1, title: 'Problem-Solver' },
        { id: 2, title: 'Innovative' },
        { id: 3, title: 'Adaptable' },
        { id: 4, title: 'Collaborative' },
        { id: 5, title: 'Efficient' },
        { id: 6, title: 'Creative' },
        { id: 7, title: 'Communicator' },
        { id: 8, title: 'Attention-to-detail' },
    ];

    const handleGetInTouchClick = () => {
        // Call the function passed from parent component
        onContactClick();
    };

    return (
        <section id='hero' className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <p className={styles.firstP}>SOFTWARE DEVELOPER · CONTENT CREATOR</p>
                        <h1>Hi, I am Lebo<span className={styles.dot}>.</span></h1>
                        <p className={styles.secondP}>Building digital experiences · Founder of Atum.</p>
                        <Button onClick={handleGetInTouchClick} aria-label="Open form">Let's Work Together <FontAwesomeIcon className={styles.icon} icon={faArrowRight} />
                        </Button>
                    </div>
                    <div className={styles.image}></div>
                </div>
                <div className={styles.attributes}>
                    <div className={styles.marqueeTrack}>

                        {attri.map((attri) => (
                            <div className={styles.attriContainer} key={attri.id}>
                                <span>{attri.title}</span>
                                <FontAwesomeIcon className={styles.iconOne} icon={faBurst} />
                            </div>
                        ))}

                        {/* Duplicate set for seamless loop */}
                        {attri.map((attri) => (
                            <div className={styles.attriContainer} key={attri.id}>
                                <span>{attri.title}</span>
                                <FontAwesomeIcon className={styles.iconOne} icon={faBurst} />
                            </div>
                        ))}

                        {/* Duplicate set for seamless loop */}
                        {attri.map((attri) => (
                            <div className={styles.attriContainer} key={attri.id}>
                                <span>{attri.title}</span>
                                <FontAwesomeIcon className={styles.iconOne} icon={faBurst} />
                            </div>
                        ))}

                        {/* Duplicate set for seamless loop */}
                        {attri.map((attri) => (
                            <div className={styles.attriContainer} key={attri.id}>
                                <span>{attri.title}</span>
                                <FontAwesomeIcon className={styles.iconOne} icon={faBurst} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}