import Link from 'next/link';
import styles from './Button.module.scss';

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    type = 'button',
    onClick,
    className = '',
}) {

    const classNames = ` ${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={classNames}>
                {children}
            </Link>
        )
    };

    return (
        <button type={type} onClick={onClick} className={classNames}>
            {children}
        </button>
    );

}