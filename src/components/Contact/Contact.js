
import styles from './Contact.module.scss';
import Button from '../UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {

    return (
        <section className={styles.contact}>
            <div className={styles.container}>
                <h2>Let's build someting together.</h2>
                <Button>Let's Work Together <FontAwesomeIcon className={styles.icon} icon={faArrowRight} /></Button>
            </div>
        </section>
    )
}