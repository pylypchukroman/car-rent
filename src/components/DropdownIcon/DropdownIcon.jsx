import styles from './DropdownIcon.module.scss';

export const DropdownIcon = () => {
    return (
        <div className={styles.icon}>
            <svg viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="#121417" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    );
};

export const ReversedDropdownIcon = () => {
    return (
        <div className={styles.icon}>
            <svg className={styles.revers} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="#121417" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    );
};
