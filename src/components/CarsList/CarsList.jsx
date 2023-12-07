import styles from './CarsList.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {selectCars} from "../../redux/selectors";
import {useEffect} from "react";
import {fetchDataThunk} from "../../redux/operations";
import {CarCard} from "../CarCard/CarCard";

export const CarsList = () => {
    const dispatch = useDispatch();
    const cars = useSelector(selectCars);

    useEffect(() => {
        dispatch(fetchDataThunk());
    }, [dispatch]);

    return (
        <div>
            <ul className={styles.wrapper}>
                {cars.map(car => <CarCard car={car} />)}
            </ul>
        </div>
    );
}
