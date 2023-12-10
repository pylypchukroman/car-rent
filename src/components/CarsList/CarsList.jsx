import styles from './CarsList.module.scss';
import {CarCard} from "../CarCard/CarCard";
import {useCarsListData} from "../../hooks/useCarsListData";

export const CarsList = () => {
    const { carsToShow } = useCarsListData();

    return (
        <div className={styles.wrapper}>
            <ul className={styles.list}>
                {carsToShow.map(car => <CarCard key={car.id} car={car} />)}
            </ul>
        </div>
    );
};
