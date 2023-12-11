import {useSelector} from "react-redux";
import {selectCurrentPage} from "../redux/currentPage/selectors";
import {selectCars, selectCarsByPage} from "../redux/cars/selectors";
import {selectFilter} from "../redux/filter/selectors";
import {selectFavorites} from "../redux/favorites/selectors";
import {useEffect, useState} from "react";
import {addFavoritePropToCar} from "../helpers/addFavoritesPropToCar";
import {carFilter} from "../helpers/carFilter";

export const useCarsListData = () => {
    const currentPage = useSelector(selectCurrentPage);
    const onePageCarsList = useSelector(selectCarsByPage);
    const allCarsList = useSelector(selectCars);
    const filter = useSelector(selectFilter);
    const favoritesList = useSelector(selectFavorites);

    const [carsByPageList, setCarsByPageList] = useState(onePageCarsList);

    const carsByPageListWithFav = addFavoritePropToCar(carsByPageList, favoritesList);
    const AllCarsWithFav = addFavoritePropToCar(allCarsList, favoritesList);
    console.log('al', allCarsList)
    const filteredCars = carFilter(AllCarsWithFav, filter);
    const carsToShow = filter.isActive ? filteredCars : carsByPageListWithFav;

    useEffect(() => {
        setCarsByPageList(prev =>
            currentPage === 1 ? onePageCarsList : [...prev, ...onePageCarsList]
        );
    }, [onePageCarsList]);

    return {carsToShow};
};
