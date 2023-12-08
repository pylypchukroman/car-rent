import styles from './CarsList.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {selectCars} from "../../redux/selectors";
import {useEffect} from "react";
import {fetchDataThunk} from "../../redux/operations";
import {CarCard} from "../CarCard/CarCard";
import {selectFilter} from "../../redux/filter/selectors";
import {selectFavorites} from "../../redux/favorites/selectors";

export const CarsList = () => {
    const dispatch = useDispatch();
    const cars = useSelector(selectCars);
    const filter = useSelector(selectFilter);
    const favoritesList = useSelector(selectFavorites);
    const newCars = cars.map(car => {
        if (favoritesList.includes(car.id)) {
            return {
                ...car,
                favorites: true
            }
        } else {
            return {
                ...car,
                favorites: false
            }
        }
    })
    const filteredCars = newCars.filter(car => {
        const nameMatch = filter.brands ? car.make === filter.brands : true;
        const priceMatch = filter.price ? (parseInt(car.rentalPrice.slice(1), 10)) <= filter.price : true;
        const mileageFromMatch = filter.mileage.from ? car.mileage >= filter.mileage.from : true;
        const mileageToMatch = filter.mileage.to ? car.mileage <= Number(filter.mileage.to) : true;
        return nameMatch && priceMatch && mileageFromMatch && mileageToMatch;
    });

    useEffect(() => {
        dispatch(fetchDataThunk());
    }, [dispatch]);

    return (
        <div>
            <ul className={styles.wrapper}>
                {filteredCars.map(car => <CarCard key={car.id} car={car} />)}
            </ul>
        </div>
    );
}
