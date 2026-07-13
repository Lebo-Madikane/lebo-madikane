import styles from './HireMeForm.module.scss';
import Card from '@/components/UI/Card/Card';
import Button from '@/components/UI/Button/Button';

export default function HireMeForm() {

    return (
        <div className={styles.formSection}>
            <div className={styles.container}>
                <Card className={styles.formCard}>
                    <div className={styles.contactFormHeader}>
                        <span>CONTACT</span>
                        <h3>Job Enquiry</h3>
                        <p>Hire Me</p>
                    </div>
                    <form className={styles.contactFormInfo}>
                        <div className={styles.formGroup}>
                            <div className={styles.formFullName}>
                                <label htmlFor="fullName" className={styles.formLabel}>
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    className={styles.formInput}
                                    placeholder="Full Name"
                                    required
                                />
                            </div>
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
                        <div className={styles.formGroup}>
                            <div className={styles.formServices}>
                                <label htmlFor="employment-type" className={styles.formLabel}>
                                </label>
                                <select
                                    id="employment-type"
                                    name="employment-type"
                                    className={`${styles.formInput} ${styles.formSelect}`}
                                    required
                                >
                                    <option value="">Employment Type</option>
                                    <option value="full-time">Full-time</option>
                                    <option value="part-time">Part-time</option>
                                    <option value="contract">Contract</option>
                                    <option value="freelance">freelance</option>
                                    <option value="consulting">Not Sure Yet / Consulting</option>
                                </select>
                            </div>
                            <div className={styles.formBudget}>
                                <label htmlFor="position" className={styles.formLabel}>
                                </label>
                                <input
                                    type="text"
                                    id="position"
                                    name="position"
                                    className={styles.formInput}
                                    placeholder="Position / Role"
                                    required
                                />
                            </div>
                        </div>
                        <div className={styles.formDescription}>
                            <label htmlFor="projectDescription" className={styles.formLabel}>
                            </label>
                            <textarea
                                id="projectDescription"
                                name="projectDescription"
                                className={styles.formTextarea}
                                placeholder="Any extra context about the role or company(Remote/Hybrid).."
                                rows="6"
                                required
                            ></textarea>
                        </div>
                        <Button>CONFIRM</Button>
                    </form>
                </Card>
            </div>
        </div>
    )

}