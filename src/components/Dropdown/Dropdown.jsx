import styles from './Dropdown.module.scss';
import {useState} from "react";
import {DropdownIcon, ReversedDropdownIcon} from "../DropdownIcon/DropdownIcon";

export const Dropdown = () => {
    const [isActive, setIsActive] = useState(false);
    const [data, setData] = useState('Enter the text');
    const options = ['firs', 'second', 'third'];

    const onOptionClick = (option) => {
        setData(option);
        setIsActive(false);
    }
    return (
        <div className={styles.dropdown}>
            <div className={styles.btn} onClick={() => setIsActive(!isActive)}>
                {data}
                <span>
                    {isActive ? <ReversedDropdownIcon/> : <DropdownIcon />}
                </span>
            </div>
            {isActive && (
            <div className={styles.contentWrapper}>
                {options.map(option => (
                    <div className={styles.content} onClick={() => onOptionClick(option)}>
                       {option}
                    </div>
                ))}
            </div>
            )}
        </div>
    )
}
