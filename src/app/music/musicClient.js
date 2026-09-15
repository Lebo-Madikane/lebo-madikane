'use client';

import { useState } from 'react';
import styles from './musicClient.module.scss'
import Image from 'next/image';
import Button from '@/components/UI/Button/Button';
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
                            <div className={styles.artistBioHeading}>
                                <p>Artist Bio</p>
                                <h2>South African<br/>
                                    DJ & Selector</h2>
                            </div>
                            <div className={styles.artistBio}>
                                <h4>I'm Lebo — a South African house DJ, selector and music enthusiast based in Cape Town.</h4>
                                <p>My relationship with house music began in 2008 through a deep love for discovering, collecting and sharing music. What started as a personal obsession grew into DJing, online mixes, curated playlists and collaborations with fellow selectors, including a DJ trio that brought our sound to local venues and intimate spaces.</p>
                                <p>My sets don't follow a rigid script. Depending on the room and the moment, I navigate from melodic, introspective grooves through to Afrocentric rhythms — always reading the crowd, always serving the music first.</p>
                                <div className={styles.btnsContainer}>
                                    <Button>Call to Book</Button>
                                    <Button variant='secondary'>WhatsApp</Button>
                                </div>
                            </div>
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