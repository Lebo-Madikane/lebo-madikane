'use client';

import { useState } from 'react';
import styles from './musicClient.module.scss'
import Image from 'next/image';
import Button from '@/components/UI/Button/Button';
import Header from '@/components/Header/Header';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import Modal from '@/components/Modal/Modal';
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
                        <div className={styles.bioContainer}>
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
                                    <Button className={styles.callToBookBtn}>Call to Book</Button>
                                    <Button variant='secondary'>WhatsApp</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.soundHireSection}>
                        <div className={styles.soundHireContainer}>
                            <div className={styles.soundHireContent}>
                                <p>For Hire</p>
                                <h2>Sound Express</h2>
                                <p className={styles.paragraph}>I offer DJ and sound-hire solutions for intimate events, private functions, parties, listening sessions and small-to-medium venues.</p>
                                <p className={styles.paragraph}>Sound requirements vary by event, so get in touch with your event details for a tailored quote.</p>
                                <div className={styles.btnsContainer}>
                                    <Button className={styles.quoteBtn}>Get A Quote</Button>
                                    <Button variant='secondary'>WhatsApp</Button>
                                </div>
                            </div>
                            <div className={styles.soundHireImageContainer}>

                            </div>
                        </div>
                    </div>
                    <div className={styles.collaborationSection}>
                        <div className={styles.collaborationContainer}>
                            <p>collaboration</p>
                            <h2>SAMZAR</h2>
                            <p className={styles.secondP}>I'm always open to connecting with artists, DJs, producers, creatives, venues and brands who share a genuine love for music and culture.</p>
                            <div className={styles.cta}>
                                <div className={styles.ctaText}>
                                    <p className={styles.nowStreaming}>NOW STREAMING</p>
                                    <p className={styles.textTwo}><span className={styles.textTwoMobile}>Deep & Afro-house</span> DJ Sets | Playlists</p>
                                </div>
                                <div className={styles.ctaPlatforms}>
                                    <Link href="https://soundcloud.com/lebomadikane" target="_blank" rel="noopener noreferrer" className={`${styles.plartformsBorder} ${styles.soundcloudBg}`}>
                                        <FontAwesomeIcon className={`${styles.icon} ${styles.soundcloud}`} icon={faSoundcloud} />
                                    </Link>
                                    <Link href="https://open.spotify.com/user/rrw1oyqu9zsi2140dv941qxps" target="_blank" rel="noopener noreferrer" className={`${styles.plartformsBorder} ${styles.spotifyBg}`}>
                                        <FontAwesomeIcon className={`${styles.icon} ${styles.spotify}`} icon={faSpotify} />
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.imagePlacement}>
                                <Image className={styles.img} src='/images/music/samzarImage.svg' alt="Lebo Image" width={150} height={100} priority={true} />
                            </div>
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