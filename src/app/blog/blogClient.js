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
                    <div className={styles.blogHero} >
                        <div className={styles.textContent}>
                            <p className={styles.topText}>BLOG</p>
                            <h1 className={styles.hOne}>Articles &<br/>
                                <span className={styles.hOneBottom}>Tech Guides</span>
                            </h1>
                            <p>Practical guides and insights on web development, from Linux, tools and everything I'm learning along the way.</p>
                            <div className={styles.underLiner}></div>
                            <p className={styles.bottomtext}>LEARN / BUILD / GROW</p>
                        </div>
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