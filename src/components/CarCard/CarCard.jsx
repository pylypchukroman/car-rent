import styles from './CarCard.module.scss';
import {FavoritesIcon} from "../FavoritesIcon/favoritesIcon";
import {CarInfoModal} from "../CarInfoModal/CarInfoModal";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setFavorites} from "../../redux/favorites/favoritesSlice";
import {selectFavorites} from "../../redux/favorites/selectors";

export const CarCard = ({ car }) => {

    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();

    const OnBtnClick = (id) => {
        setModalOpen(true);
    }

    const onModalClose = () => {
        setModalOpen(false);
    }

    const favoritesBtnClick = (id) => {
        dispatch(setFavorites(id));
    }

    return (
        <>
        <div className={styles.cardWrapper}>
            <div className={styles.imgWrapper}>
                <img className={styles.img} src={car.img} alt=""/>
            </div>
            <div className={styles.mainInfo}>
                <div className={styles.nameWrapper}>
                    <p className={styles.mainFontStyle}>
                        {car.make}{' '}
                        <span className={styles.model}>
                            {car.model}{' '}
                        </span>
                        {car.year}
                    </p>
                </div>
                <p className={styles.mainFontStyle}>{car.rentalPrice}</p>
            </div>
            <div className={styles.secondaryInfo}>
                <div className={styles.topLine}>
                    <p className={styles.secondaryFontStyle}>{car.address.split(',')[1]}</p>
                    <p className={styles.secondaryFontStyle}>{car.address.split(',')[2]}</p>
                    <p className={styles.secondaryFontStyle}>{car.rentalCompany}</p>
                </div>
                <div className={styles.bottomLine}>
                    <p className={styles.secondaryFontStyle}>{car.type}</p>
                    <p className={styles.secondaryFontStyle}>{car.make}</p>
                    <p className={styles.secondaryFontStyle}>{car.mileage}</p>
                    <p className={styles.secondaryFontStyle}>{car.accessories[0]}</p>
                </div>
            </div>
            <button className={styles.favBtn} onClick={() => favoritesBtnClick(car.id)}>
                < FavoritesIcon isFavorite={car.favorites} />
            </button>
            <button className={styles.button} type='button' onClick={() => OnBtnClick(car.id)}>Learn more</button>
        </div>
            {modalOpen && <CarInfoModal id={car.id} onModalClose={onModalClose}/>}
        </>
    );
}
