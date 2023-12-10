import styles from './CarCard.module.scss';
import {FavoritesIcon} from "../FavoritesIcon/favoritesIcon";
import {CarInfoModal} from "../CarInfoModal/CarInfoModal";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setFavorites} from "../../redux/favorites/favoritesSlice";
import {getCorrectMileage} from "../../helpers/getCorrectMileage";

export const CarCard = ({ car }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();

    const onModalOpen = () => {
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const onModalClose = () => {
        setModalOpen(false);
        document.body.style.overflow = 'auto';
    }

    const [_, country, city] = car.address.split(',');

    return (
        <>
        <li className={styles.cardWrapper}>
            <div className={styles.imgWrapper}>
                <img className={styles.img} src={car.img} alt="car"/>
            </div>
            <div className={styles.mainInfo}>
                <div className={styles.nameWrapper}>
                    <h3 className={styles.mainFontStyle}>
                        {car.make}{' '}
                        <span className={styles.model}>
                            {car.model}{', '}
                        </span>
                        {car.year}
                    </h3>
                </div>
                <p className={styles.mainFontStyle}>{car.rentalPrice}</p>
            </div>
            <div className={styles.row}>
               <p className={styles.secondaryFontStyle}>{country}</p>
               <p className={styles.secondaryFontStyle}>{city}</p>
               <p className={styles.secondaryFontStyle}>{car.rentalCompany}</p>
            </div>
            <div className={styles.row}>
               <p className={styles.secondaryFontStyle}>{car.type}</p>
               <p className={styles.secondaryFontStyle}>{car.make}</p>
               <p className={styles.secondaryFontStyle}>{getCorrectMileage(car.mileage)}</p>
               <p className={styles.secondaryFontStyle}>{car.accessories[0]}</p>
            </div>
            <button
                className={styles.favBtn}
                onClick={() => dispatch(setFavorites(car.id))}
            >
                < FavoritesIcon isFavorite={car.favorites} />
            </button>
            <button
                className={styles.button}
                type='button'
                onClick={onModalOpen}
            >
                Learn more
            </button>
        </li>
            {modalOpen && <CarInfoModal car={car} onModalClose={onModalClose}/>}
        </>
    );
};
