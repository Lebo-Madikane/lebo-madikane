'use client';

import { useState } from 'react';
import styles from './blogClient.module.scss'
import Header from '@/components/Header/Header'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import Modal from '@/components/Modal/Modal'
import Card from '@/components/UI/Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
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
        },
        {
            id: 2,
            name: "HTML",
            image: "/images/blog/blogPageCards/html.jpg",
            heading: "HTML Foundations",
            paragraph: "Understand the building blocks of the web. This guide covers HTML structure, elements, attributes, and best practices.",
            date: "Publishing soon"
        },
        {
            id: 3,
            name: "CSS",
            image: "/images/blog/blogPageCards/css.jpg",
            heading: "CSS Basics",
            paragraph: "Style your websites with confidence. Learn how to use selectors, properties, and flexbox to create modern responsive layouts.",
            date: "Publishing soon"
        },
        {
            id: 4,
            name: "JAVASCRIPT",
            image: "/images/blog/blogPageCards/js.svg",
            heading: "JavaScript for beginners",
            paragraph: "Get started with JavaScript and learn how to make your web pages interactive. We'll cover variables, functions, and more.",
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
                    <div className={styles.blogHeader}>
                        <p>Publishing soon</p>
                        <h2>Featured Articles</h2>
                        {/* <h2>Start With These</h2> */}
                    </div>
                    <div className={styles.blogCardContainer}>
                        {blogCardInfo.map((blogCard) => (
                            <div className={styles.blogCardPlacemenet} key={blogCard.id}>
                                <Card className={styles.blogCard}>
                                    <Image className={styles.blogCardImage} src={blogCard.image} alt="Linux Card Image" width={150} height={100} priority={true} />
                                    <span className={styles.blogCardName}>{blogCard.name}</span>
                                    <h4 className={styles.heading}>{blogCard.heading}</h4>
                                    <p className={styles.paragraph}>{blogCard.paragraph}</p>
                                    <div className={styles.cardCta}>
                                        <span>{blogCard.date}</span>
                                        <Button variant='tertiary' className={styles.button}>Read More <FontAwesomeIcon className={styles.icon} icon={faArrowRight} /></Button>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                    <div className={styles.blogEmailList}>
                        <div className={styles.blogEmailListText}>
                            <p className={styles.blogEmailP}>STAY UPDATED</p>
                            <h3>Get the latest articles straight to your inbox.</h3>
                            <p className={styles.blogEmailPTwo}>Be the first to know when I publish new guides.</p>
                        </div>
                        <div className={styles.blogEmailInput}>
                            <div className={styles.formEmail}>
                                <label htmlFor="email" className={styles.formLabel}>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    //value={formData.email}
                                    //onChange={handleChange}
                                    className={styles.formInput}
                                    placeholder="Your email address"
                                    required
                                    //disabled={isSubmitting}
                                />
                            </div>
                            <Button>Subscribe <FontAwesomeIcon className={styles.icon} icon={faArrowRight} /></Button>
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