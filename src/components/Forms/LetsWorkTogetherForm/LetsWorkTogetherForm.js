import styles from './LetsWorkTogetherForm.module.scss';
import Card from '@/components/UI/Card/Card';
import Button from '@/components/UI/Button/Button';

export default function LetsWorkTogetherForm() {

    return (
        <div className={styles.formSection}>
            <div className={styles.container}>
                <Card className={styles.formCard}>
                    <div className={styles.contactFormHeader}>
                        <span>CONTACT</span>
                        <h3>Project Enquiry</h3>
                        <p>Let's work together</p>
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
                                <label htmlFor="service" className={styles.formLabel}>
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    className={`${styles.formInput} ${styles.formSelect}`}
                                    required
                                >
                                    <option value="">Select a service</option>
                                    <option value="web-design">Web Design</option>
                                    <option value="web-development">Web Development</option>
                                    <option value="digital-marketing">Digital Marketing</option>
                                    <option value="branding">Branding & Identity</option>
                                    <option value="full-transformation">Full Digital Transformation</option>
                                    <option value="consulting">Not Sure Yet / Consulting</option>
                                </select>
                            </div>
                            <div className={styles.formBudget}>
                                <label htmlFor="brand" className={styles.formLabel}>
                                </label>
                                <input
                                    type="text"
                                    id="brand"
                                    name="brand"
                                    className={styles.formInput}
                                    placeholder="Company / Brand"
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
                                placeholder="Tell me about your project and what you need.."
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