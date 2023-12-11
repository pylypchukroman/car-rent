import styles from './Dropdown.module.scss';
import {useState} from "react";
import {DropdownIcon, ReversedDropdownIcon} from "../DropdownIcon/DropdownIcon";

export const Dropdown = ({header, inputChange, value, options }) => {
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
                    <span>
                        {isActive ? <ReversedDropdownIcon/> : <DropdownIcon />}
                    </span>
                </div>
                {isActive && (
                <div className={styles.contentWrapper}>
                    {options.map((option, i) => (
                        <div className={styles.content} onClick={() => onOptionClick(option)} key={i}>
                           {option}
                        </div>
                    ))}
                </div>
                )}
            </div>
        </div>
    );
};
