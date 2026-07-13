import styles from './ViewResumeForm.module.scss';
import Card from '@/components/UI/Card/Card';
import Button from '@/components/UI/Button/Button';

export default function ViewResumeForm() {

    return (
        <div className={styles.formSection}>
            <div className={styles.container}>
                <Card className={styles.formCard}>
                    <div className={styles.contactFormHeader}>
                        <h3>Receive resume via email</h3>
                    </div>
                    <form className={styles.contactFormInfo}>
                        <div className={styles.formGroup}>
                            <div className={styles.formEmail}>
                                <label htmlFor="email" className={styles.formLabel}>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className={styles.formInput}
                                    placeholder="Email Address"
                                    required
                                />
                            </div>
                        </div>
                        <Button>CONFIRM</Button>
                    </form>
                </Card>
            </div>
        </div>
    )

}