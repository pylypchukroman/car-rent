import {useSelector} from "react-redux";
import {selectFavorites} from "../redux/favorites/selectors";
import {selectCars} from "../redux/cars/selectors";

export const useFavoritesCarsData = () => {
    const favoritesCarIds = useSelector(selectFavorites);
    const carsList = useSelector(selectCars);
    const favoritesCars = carsList.filter(car => favoritesCarIds.includes(car.id));

  return { favoritesCars };
};
