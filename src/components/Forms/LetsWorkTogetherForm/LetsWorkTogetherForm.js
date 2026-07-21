'use client';
import { useState } from 'react';

import styles from './LetsWorkTogetherForm.module.scss';
import Card from '@/components/UI/Card/Card';
import Button from '@/components/UI/Button/Button';

export default function LetsWorkTogetherForm() {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        service: '',
        brand: '',
        message: ''
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
        const { fullName, email, service } = formData;

        if (!fullName.trim() || !email.trim() || !service) {
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
                    formType: 'letsWorkTogether',
                    fullName: formData.fullName,
                    email: formData.email,
                    service: formData.service,
                    brand: formData.brand,
                    message: formData.message
                })
            });
            
            const result = await response.json();

            if (result.status === 'success') {
                setSubmitStatus('success');
                setFormData({ fullName: '', email: '', service: '', brand: '', message: '' });
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
                        <span>CONTACT</span>
                        <h3>Project Enquiry</h3>
                        <p>Let's work together</p>
                    </div>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                        <div className={styles.successMessage}>
                            ✅ Thank you! We've received your request and will contact you within 24 hours.
                        </div>
                    )}
                    {submitStatus === 'error' && (
                        <div className={styles.errorMessage}>
                            ❌ Something went wrong while submitting your request. Please try again or contact us directly.
                        </div>
                    )}

                    <form className={styles.contactFormInfo} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <div className={styles.formFullName}>
                                <label htmlFor="fullName" className={styles.formLabel}>
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    name="fullName"
                                    className={styles.formInput}
                                    placeholder="Full Name"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
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
                        <div className={styles.formGroup}>
                            <div className={styles.formServices}>
                                <label htmlFor="service" className={styles.formLabel}>
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
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
                                    value={formData.brand}
                                    onChange={handleChange}
                                    className={styles.formInput}
                                    placeholder="Company / Brand"
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>
                        <div className={styles.formDescription}>
                            <label htmlFor="message" className={styles.formLabel}>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={styles.formTextarea}
                                placeholder="Tell me about your project and what you need.."
                                rows="6"
                                disabled={isSubmitting}
                            ></textarea>
                        </div>
                        <Button type='submit' disabled={isSubmitting}>{isSubmitting ? 'Sending Request...' : 'Send Request'}</Button>
                    </form>
                </Card>
            </div>
        </div>
    )

}