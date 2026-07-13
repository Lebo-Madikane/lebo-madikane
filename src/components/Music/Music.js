import styles from './Music.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faSoundcloud} from "@fortawesome/free-brands-svg-icons";

export default function Music() {

    return (
        <section className={styles.musicSection}>
            <div className={styles.container}>
                <span className={styles.statementRight}>Curated Deep & Afro-house Music</span>
                <div className={styles.content}>
                    <div className={styles.contentContainer}>
                        <div className={styles.header}>
                            <h2>Let's Play House</h2>
                        </div>
                        <div className={styles.images}>
                            <Image className={styles.img} src='/images/music/musicImage1.svg' alt="Music Image" width={150} height={100} priority={true} />
                        </div>
                        <div className={styles.cta}>
                            <div className={styles.ctaText}>
                                <p className={styles.nowStreaming}>NOW STREAMING</p>
                                <p className={styles.textTwo}>Deep & Afro-house DJ Sets | Playlists</p>
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
                    </div>
                </div>
                <span className={styles.statementLeft}>Curated Deep & Afro-house Music</span>
            </div>
        </section>
    );
}