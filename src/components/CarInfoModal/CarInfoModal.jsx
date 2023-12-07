import styles from './CarInfoModal.module.scss';
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {selectCars} from "../../redux/selectors";

export const CarInfoModal = ({ id, onModalClose }) => {

    const cars = useSelector(selectCars);
    const car = cars.find(car => car.id === id);

    const onCloseBtnClick = () => {
        onModalClose()
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
        <div className={styles.backdrop}>
            <div className={styles.modal}>
                <button className={styles.closeBtn} type="button" onClick={onCloseBtnClick}>
                    X
                </button>
                <div className={styles.imgWrapper}>
                    <img className={styles.img} src={car.img} alt=""/>
                </div>
                <div className={styles.nameWrapper}>
                    <p className={styles.mainFontStyle}>
                        {car.make}{' '}
                        <span className={styles.model}>
                            {car.model}{', '}
                        </span>
                        {car.year}
                    </p>
                </div>
                <div className={styles.topLine}>
                    <p className={styles.secondaryFontStyle}>{car.address.split(',')[1]}</p>
                    <p className={styles.secondaryFontStyle}>{car.address.split(',')[2]}</p>
                    <p className={styles.secondaryFontStyle}> Id: {car.id}</p>
                    <p className={styles.secondaryFontStyle}> Year: {car.year}</p>
                    <p className={styles.secondaryFontStyle}> Type: {car.type}</p>
                </div>
                <div className={styles.bottomLine}>
                    <p className={styles.secondaryFontStyle}>Fuel Consumption: {car.fuelConsumption}</p>
                    <p className={styles.secondaryFontStyle}>Engine Size: {car.engineSize}</p>
                </div>
                <p className={styles.descr}>{car.description}</p>
                <p className={styles.accessoriesDesk}>Accessories and functionalities:</p>
                <ul className={styles.accessoryWrapper}>
                    {car.accessories.map(acc => <li className={styles.accessory}>{acc}</li>)}
                </ul>
                <ul className={styles.accessoryWrapper}>
                    {car.functionalities.map(fun => <li className={styles.accessory}>{fun}</li>)}
                </ul>
                <p className={styles.rental}>Rental Conditions: </p>
                <div className={styles.flex}>
                    <p className={styles.conditions}>Minimum age : 25</p>
                    <p className={styles.conditions}>Valid driver’s license</p>
                </div>
                <div className={styles.flex}>
                    <p className={styles.conditions}>Security deposite required </p>
                    <p className={styles.conditions}>Mileage: {car.mileage} </p>
                    <p className={styles.conditions}>Price: {car.rentalPrice} </p>
                </div>
                <button className={styles.btn} type="button">Rental car</button>
            </div>
        </div>
    )
}
