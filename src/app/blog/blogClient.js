'use client';

import { useState } from 'react';
import styles from './blogClient.module.scss'
import Header from '@/components/Header/Header'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import Modal from '@/components/Modal/Modal'
import Card from '@/components/UI/Card/Card';
import LetsWorkTogetherForm from "@/components/Forms/LetsWorkTogetherForm/LetsWorkTogetherForm";

export default function BlogClient() {

    const [activeModal, setActiveModal] = useState(null);

    const openModal = (modalName) => setActiveModal(modalName);
    const closeModal = () => setActiveModal(null);

    return (
        <>
            <Header />
            <div className={styles.blogPage}>
                <div className={styles.blogContainer}>
                    <div className={styles.textContent}>
                        <h1>BLOG PAGE</h1>
                        <p>Articles publishing soon! PAGE UNDER DEVELOPMENT.</p>
                    </div>
                    <div className={styles.blogCardsContainer}>
                        <Card className={styles.blogCards}></Card>
                        <Card className={styles.blogCards}></Card>
                        <Card className={styles.blogCards}></Card>
                        <Card className={styles.blogCards}></Card>
                    </div>
                </div>
            </div>
            <Contact onContactClick={() => openModal('contact')} />
            <Footer />

            {/* Single Modal — renders whichever form is active */}
            <Modal isOpen={activeModal !== null} onClose={closeModal}>
                {activeModal === 'contact' && <LetsWorkTogetherForm onClose={closeModal} />}
                {activeModal === 'hire' && <HireMeForm onClose={closeModal} />}
                {activeModal === 'resume' && <ViewResumeForm onClose={closeModal} />}
            </Modal>
        </>
    )
};