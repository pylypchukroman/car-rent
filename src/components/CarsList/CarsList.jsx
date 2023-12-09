import styles from './CarsList.module.scss';
import {CarCard} from "../CarCard/CarCard";
import {useCarsListData} from "../../hooks/useCarsListData";

export const CarsList = () => {
    const { carsToShow } = useCarsListData();

    return (
        <div>
            <ul className={styles.wrapper}>
                {carsToShow.map(car => <CarCard key={car.id} car={car} />)}
            </ul>
        </div>
    );
};
