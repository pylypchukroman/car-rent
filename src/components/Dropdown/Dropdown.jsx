import styles from './Dropdown.module.scss';
import {useEffect, useRef, useState} from "react";
import {DropdownIcon, ReversedDropdownIcon} from "../DropdownIcon/DropdownIcon";

export const Dropdown = ({header, inputChange, value, options }) => {
    const [isActive, setIsActive] = useState(false);
    const contentWrapperRef = useRef(null);
    const dropdownRef = useRef(null);

    const onOptionClick = (option) => {
        inputChange(option);
        setIsActive(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const clickOutside = contentWrapperRef.current && !contentWrapperRef.current.contains(event.target)
                && dropdownRef.current && !dropdownRef.current.contains(event.target);

            if (clickOutside) {
                setIsActive(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [contentWrapperRef, dropdownRef]);

    return (
        <div>
            <p className={styles.header}>{header}</p>
            <div className={styles.dropdown} ref={dropdownRef}>
                <div className={styles.btn} onClick={() => setIsActive(!isActive)}>
                    {value}
                    <span>
                        {isActive ? <ReversedDropdownIcon/> : <DropdownIcon />}
                    </span>
                </div>
                {isActive && (
                <ul className={styles.contentWrapper} ref={contentWrapperRef}>
                    <li className={styles.content} onClick={() => onOptionClick('All')}>All brands</li>
                    {options.map((option, i) => (
                        <li className={styles.content} onClick={() => onOptionClick(option)} key={i}>
                           {option}
                        </li>
                    ))}
                </ul>
                )}
            </div>
        </div>
    );
};
