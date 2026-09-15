'use client';

import { useState } from 'react';
import styles from './musicClient.module.scss'
import Image from 'next/image';
import Header from '@/components/Header/Header'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import Modal from '@/components/Modal/Modal'
import LetsWorkTogetherForm from "@/components/Forms/LetsWorkTogetherForm/LetsWorkTogetherForm";

export default function MusicClient() {

    const [activeModal, setActiveModal] = useState(null);

    const openModal = (modalName) => setActiveModal(modalName);
    const closeModal = () => setActiveModal(null);

    return (
        <>
            <Header />
            <div className={styles.musicPage}>
                <div className={styles.musicContainer}>
                    <div className={styles.heroSection}>
                        <div className={styles.imageContainer}>
                            <Image className={styles.img} src='/images/music/musicPageHero.svg' alt="Lebo Image" width={150} height={100} priority={true} />
                        </div>
                    </div>
                    <div className={styles.bioSection}>
                        <div className={styles.container}>

                        </div>
                    </div>
                    <div className={styles.soundHireSection}>
                        <div className={styles.container}>

                        </div>
                    </div>
                    <div className={styles.collaborationSection}>
                        <div className={styles.container}>
                            
                        </div>
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