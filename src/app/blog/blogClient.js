'use client';

import { useState } from 'react';
import styles from './blogClient.module.scss'
import Header from '@/components/Header/Header'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import Modal from '@/components/Modal/Modal'
import Card from '@/components/UI/Card/Card';
import Image from 'next/image';
import Button from '@/components/UI/Button/Button';
import LetsWorkTogetherForm from "@/components/Forms/LetsWorkTogetherForm/LetsWorkTogetherForm";

export default function BlogClient() {

    const [activeModal, setActiveModal] = useState(null);

    const openModal = (modalName) => setActiveModal(modalName);
    const closeModal = () => setActiveModal(null);

    // Blog cards info
    const blogCardInfo = [
        {
            id: 1,
            name: "LINUX",
            image: "/images/blog/blogPageCards/linux.svg",
            heading: "Linux Basics",
            paragraph: "Learn the fundamentals of Linux, from navigating the command line to managing files and permissions. Perfect for begin",
            date: "Publishing soon"
        }
    ]

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
                    <div className={styles.blogCardContainer}>
                        {blogCardInfo.map((blogCard) => (
                            <div key={blogCard.id}>
                                <Card className={styles.blogCard}>
                                    <Image className={styles.blogCardImage} src={blogCard.image} alt="Linux Card Image" width={150} height={100} priority={true} />
                                    <span className={styles.blogCardName}>{blogCard.name}</span>
                                    <h4>{blogCard.heading}</h4>
                                    <p>{blogCard.paragraph}</p>
                                    <div>
                                        <span>{blogCard.date}</span>
                                        <Button variant='tertiary'>Read More</Button>
                                    </div>
                                </Card>
                            </div>
                        ))}
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