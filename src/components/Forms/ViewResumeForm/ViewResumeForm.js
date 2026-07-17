'use client';
import { useState } from 'react';

import styles from './ViewResumeForm.module.scss';
import Card from '@/components/UI/Card/Card';
import Button from '@/components/UI/Button/Button';

export default function ViewResumeForm() {

    const [formData, setFormData] = useState({
        email: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzz2xrdi9xqMtrfHxMvJVlJs_wIr62Y-LaNnNhNt5s4fsQWRh0CewD0xL6iT_B-ioxJnA/exec';

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        if (submitStatus) {
            setSubmitStatus(null);
        }
    };

    const validateForm = () => {
        const { email } = formData;

        if (!email.trim()) {
            return 'Please fill in all required fields.';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return 'Please enter a valid email address.';
        }

        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationError = validateForm();
        if (validationError) {
            alert(validationError);
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {

            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain' },
                body: JSON.stringify({
                    formType: 'contact',
                    email: formData.email,
                })
            });

            const result = await response.json();

            if (result.status === 'success') {
                setSubmitStatus('success');
                setFormData({ email: '' });
            } else {
                setSubmitStatus('error');
            }

        } catch (error) {
            setSubmitStatus('error');
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.formSection}>
            <div className={styles.container}>
                <Card className={styles.formCard}>
                    <div className={styles.contactFormHeader}>
                        <h3>Receive resume via email</h3>
                    </div>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                        <div className={styles.successMessage}>
                            ✅ Thank you! We've received your booking request and will contact you within 24 hours to confirm
                        </div>
                    )}
                    {submitStatus === 'error' && (
                        <div className={styles.errorMessage}>
                            ❌ Something went wrong while submitting your request. Please try again or contact us directly at li
                        </div>
                    )}

                    <form className={styles.contactFormInfo} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <div className={styles.formEmail}>
                                <label htmlFor="email" className={styles.formLabel}>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={styles.formInput}
                                    placeholder="Email Address"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>
                        <Button type='submit' disabled={isSubmitting}>{isSubmitting ? 'Sending Request...' : 'Send Request'}</Button>
                    </form>
                </Card>
            </div>
        </div>
    )

}