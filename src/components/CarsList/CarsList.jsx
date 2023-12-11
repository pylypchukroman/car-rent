import styles from './CarsList.module.scss';
import {CarCard} from "../CarCard/CarCard";
import {useCarsListData} from "../../hooks/useCarsListData";
import {useSelector} from "react-redux";
import {selectError, selectLoading} from "../../redux/cars/selectors";
import {Loader} from "../Loader/Loader";
import Notiflix from 'notiflix';

export const CarsList = () => {
    const { carsToShow } = useCarsListData();
    const isLoading = useSelector(selectLoading);
    const error = useSelector(selectError);

    if (error) {
        Notiflix.Notify.failure("Something's not right. Please refresh!");
    }

    return (
        <div className={styles.wrapper}>
            {isLoading ? (
                <Loader />
            ) : (
                <ul className={styles.list}>
                    {carsToShow.map(car => <CarCard key={car.id} car={car} />)}
                </ul>
            )}
        </div>
    );
};
