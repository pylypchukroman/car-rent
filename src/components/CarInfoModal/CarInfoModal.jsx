import styles from './CarInfoModal.module.scss';
import {useEffect} from "react";
import {CloseIcon} from "../CloseIcon/CloseIcon";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const CarInfoModal = ({ car, onModalClose }) => {

    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            onModalClose();
        }
    };

    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                onModalClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onModalClose]);

    return (
        <div className={styles.backdrop} onClick={handleBackdropClick}>
            <div className={styles.modal}>
                <button
                    className={styles.closeBtn}
                    type="button" onClick={() => onModalClose()}
                >
                    < CloseIcon />
                </button>
                <LazyLoadImage
                    className={styles.img}
                    wrapperClassName={styles.imgWrapper}
                    src={car.img}
                    effect="blur"
                    alt={'car'}
                />
                <div className={styles.nameWrapper}>
                    <p className={styles.mainFontStyle}>
                        {car.make}{' '}
                        <span className={styles.model}>
                            {car.model}{', '}
                        </span>
                        {car.year}
                    </p>
                </div>
                <div className={styles.row}>
                    <p className={styles.secondaryFontStyle}>{car.address.split(',')[1]}</p>
                    <p className={styles.secondaryFontStyle}>{car.address.split(',')[2]}</p>
                    <p className={styles.secondaryFontStyle}> Id: {car.id}</p>
                    <p className={styles.secondaryFontStyle}> Year: {car.year}</p>
                    <p className={styles.secondaryFontStyle}> Type: {car.type}</p>
                </div>
                <div className={styles.row}>
                    <p className={styles.secondaryFontStyle}>Fuel Consumption: {car.fuelConsumption}</p>
                    <p className={styles.secondaryFontStyle}>Engine Size: {car.engineSize}</p>
                </div>
                <p className={styles.descr}>{car.description}</p>
                <p className={styles.accessoriesDesk}>Accessories and functionalities:</p>
                <ul className={styles.accessoryWrapper}>
                    {car.accessories.map((acc, i) =>
                        <li className={styles.secondaryFontStyle} key={i}>{acc}</li>
                    )}
                </ul>
                <ul className={styles.accessoryWrapper}>
                    {car.functionalities.map((fun, i) =>
                        <li className={styles.secondaryFontStyle} key={i}>{fun}</li>)}
                </ul>
                <p className={styles.rentalHeader}>Rental Conditions: </p>
                <div className={styles.flex}>
                    <p className={styles.conditions}>Minimum age : <span className={styles.numbers}>25</span></p>
                    <p className={styles.conditions}>Valid driver’s license</p>
                </div>
                <div className={styles.flex}>
                    <p className={styles.conditions}>Security deposite required </p>
                    <p className={styles.conditions}>Mileage: <span className={styles.numbers}>{car.mileage}</span></p>
                    <p className={styles.conditions}>Price: <span className={styles.numbers}>{car.rentalPrice}</span> </p>
                </div>
                <a className={styles.btn} href="tel:+380730000000">Rental car</a>
            </div>
        </div>
    );
};
