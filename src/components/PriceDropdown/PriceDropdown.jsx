import styles from './PriceDropdown.module.scss';
import {useState} from "react";
import {DropdownIcon, ReversedDropdownIcon} from "../DropdownIcon/DropdownIcon";

export const PriceDropdown = ({header, inputChange, value, options}) => {
    const [isActive, setIsActive] = useState(false);

    const onOptionClick = (option) => {
        inputChange(option);
        setIsActive(false);
    };

    return (
        <div>
            <p className={styles.header}>{header}</p>
            <div className={styles.dropdown}>
                <div className={styles.btn} onClick={() => setIsActive(!isActive)}>
                    {value}
                    <span className={styles.btnHeader}>To</span>
                    <span className={styles.currency}>$</span>
                    <span className={styles.icon}>
                        {isActive ? <ReversedDropdownIcon/> : <DropdownIcon />}
                    </span>
                </div>
                {isActive && (
                    <div className={styles.contentWrapper}>
                        {options.map(option => (
                            <div className={styles.content} onClick={() => onOptionClick(option)} key={option}>
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
