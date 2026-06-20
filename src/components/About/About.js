"use client";
import { useState, useRef, useEffect, useCallback } from 'react';
import styles from './About.module.scss';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const cards = [
    { id: 0, type: 'bio' },
    { id: 1, type: 'profile' },
];

const GAP = 16;             // must match SCSS gap value
const SWIPE_THRESHOLD = 50; // minimum px drag to trigger a slide

export default function About() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [offset, setOffset] = useState('0px');
    const containerRef = useRef(null);
    const touchStartX = useRef(null);
    const touchCurrentX = useRef(null);

    const prev = () => setActiveIndex((i) => (i === 0 ? cards.length - 1 : i - 1));
    const next = () => setActiveIndex((i) => (i === cards.length - 1 ? 0 : i + 1));

    // ─── TOUCH HANDLERS ──────────────────────────────────────
    const onTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
        touchCurrentX.current = e.touches[0].clientX;
    };

    const onTouchMove = (e) => {
        touchCurrentX.current = e.touches[0].clientX;
    };

    const onTouchEnd = () => {
        if (touchStartX.current === null) return;

        const diff = touchStartX.current - touchCurrentX.current;

        if (Math.abs(diff) >= SWIPE_THRESHOLD) {
            diff > 0 ? next() : prev(); // swipe left = next, swipe right = prev
        }

        touchStartX.current = null;
        touchCurrentX.current = null;
    };

    // ─── OFFSET CALCULATION ───────────────────────────────────
    const recalcOffset = useCallback(() => {
        if (!containerRef.current) return;

        const firstCard = containerRef.current.children[0];
        if (!firstCard) return;

        const cardWidth = firstCard.getBoundingClientRect().width;
        const rawSlide = activeIndex * (cardWidth + GAP);

        setOffset(`-${rawSlide}px`);
    }, [activeIndex]);

    useEffect(() => {
        recalcOffset();
        window.addEventListener('resize', recalcOffset);
        return () => window.removeEventListener('resize', recalcOffset);
    }, [recalcOffset]);

    return (
        <section className={styles.about}>
            <div
                ref={containerRef}
                className={styles.container}
                style={{ '--offset': offset }}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                {/* BIO CARD */}
                <Card className={`${styles.card} ${activeIndex === 0 ? styles.active : styles.hidden}`}>
                    <div className={styles.aboutTop}>
                        <span className={styles.aboutMe}>About Me</span>
                    </div>
                    <div className={styles.aboutBottom}>
                        <p className={styles.aboutMeText}>
                            My name is Lebo, I am passionate to empower individuals and businesses to develop professionally.<br />
                            Through creative designs, I am a Web Developer and Content Creator.
                        </p>
                    </div>
                </Card>

                {/* PROFILE CARD */}
                <Card className={`${styles.card} ${activeIndex === 1 ? styles.active : styles.hidden}`}>
                    <div className={styles.aboutTop}>
                        <div className={styles.image}></div>
                    </div>
                    <div className={`${styles.aboutBottom} ${styles.btns}`}>
                        <Button>Hire Me</Button>
                        <Button variant='tertiary' size='xs'>
                            View Resume <FontAwesomeIcon className={styles.icon} icon={faArrowRight} />
                        </Button>
                    </div>
                </Card>
            </div>

            {/* CAROUSEL CONTROLS — mobile only */}
            <div className={styles.controls}>
                <button className={styles.arrow} onClick={prev} aria-label="Previous card">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div className={styles.dots}>
                    {cards.map((card) => (
                        <button
                            key={card.id}
                            className={`${styles.dot} ${activeIndex === card.id ? styles.dotActive : ''}`}
                            onClick={() => setActiveIndex(card.id)}
                            aria-label={`Go to card ${card.id + 1}`}
                        />
                    ))}
                </div>
                <button className={styles.arrow} onClick={next} aria-label="Next card">
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
            <div className={styles.skills}></div>
        </section>
    );
}