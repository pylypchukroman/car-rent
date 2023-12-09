import styles from './Footer.module.scss'

export const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.text}>
                Need help renting a car? Please call:
            </p>
            <a className={styles.phone} href="tel:+380730000000">+380730000000</a>
        </div>
    );
};
