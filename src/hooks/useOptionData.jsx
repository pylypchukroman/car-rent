import {useSelector} from "react-redux";
import {selectCars} from "../redux/cars/selectors";
import {extractCorrectPrice} from "../helpers/extractCorrectPrice";

export const useOptionData = () => {
    const allCarsList = useSelector(selectCars);
    const brandOptions = [...new Set(allCarsList.map(car => car.make).sort((a, b) => a.localeCompare(b)))];
    const priceOptions = [...new Set(allCarsList.map(car => extractCorrectPrice(car.rentalPrice)).sort((a, b) => a -b))];

    return {brandOptions, priceOptions}
};
