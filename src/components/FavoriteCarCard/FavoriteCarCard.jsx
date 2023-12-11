import styles from './FavoriteCarcard.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const FavoriteCarCard = ({ car }) => {

    return (
        <li className={styles.wrapper}>
            <LazyLoadImage
                className={styles.img}
                wrapperClassName={styles.imgWrapper}
                src={car.img}
                effect="blur"
                alt={'hero car'}
            />
            <div className={styles.topLine}>
                <p className={styles.MainText}>{car.make}</p>
                <p className={styles.MainText}>{car.model}</p>
            </div>
            <div className={styles.bottomLine}>
                <p className={styles.text}>Price: <span className={styles.numbers}>{car.rentalPrice}</span></p>
                <p className={styles.text}>Mileage: <span className={styles.numbers}>{car.mileage}</span></p>
            </div>
            <p className={styles.companyHeader}>Rental company: </p>
            <p className={styles.companyText}>{car.rentalCompany}</p>
        </li>
    );
};
