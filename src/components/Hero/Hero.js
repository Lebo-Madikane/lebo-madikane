import styles from './Hero.module.scss';
import Button from '../UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBurst } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {

    const attri = [
        'Problem-Solver',
        'Innovative',
        'Adaptable',
        'Collaborative',
        'Efficient',
        'Creative',
        'Communicator',
        'Attention-to-detail',
    ];

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <p className={styles.firstP}>WEB DEVELOPER · CONTENT CREATOR</p>
                        <h1>Hi, I am Lebo<span className={styles.dot}>.</span></h1>
                        <p className={styles.secondP}>Building digital experiences · Founder of Atum.</p>
                        <Button>Let's Work Together <FontAwesomeIcon className={styles.icon} icon={faArrowRight} />
                        </Button>
                    </div>
                    <div className={styles.image}></div>
                </div>
                <div className={styles.attributes}>
                    <div className={styles.marqueeTrack}>

                        {attri.map((attri) => (
                            <div className={styles.attriContainer} key={`keyOne`}>
                                <h7>{attri}</h7>
                                <FontAwesomeIcon className={styles.iconOne} icon={faBurst} />
                            </div>
                        ))}

                        {/* Duplicate set for seamless loop */}
                        {attri.map((attri) => (
                            <div className={styles.attriContainer} key={`keyTwo`}>
                                <h7>{attri}</h7>
                                <FontAwesomeIcon className={styles.iconOne} icon={faBurst} />
                            </div>
                        ))}

                        {/* Duplicate set for seamless loop */}
                        {attri.map((attri) => (
                            <div className={styles.attriContainer} key={`keyThree`}>
                                <h7>{attri}</h7>
                                <FontAwesomeIcon className={styles.iconOne} icon={faBurst} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}