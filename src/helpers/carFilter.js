import {extractCorrectPrice} from "./extractCorrectPrice";

export function carFilter(cars, filter) {
    const normalizedFilter = normalizeFilter(filter);

    return cars.filter(car => {
        const nameMatch = normalizedFilter.brands ? car.make === normalizedFilter.brands : true;
        const priceMatch = normalizedFilter.price ? extractCorrectPrice(car.rentalPrice) <= normalizedFilter.price : true;
        const mileageFromMatch = normalizedFilter.mileage.from ? car.mileage >= normalizedFilter.mileage.from : true;
        const mileageToMatch = normalizedFilter.mileage.to ? car.mileage <= Number(normalizedFilter.mileage.to) : true;

        return nameMatch && priceMatch && mileageFromMatch && mileageToMatch;
    });
}

function normalizeFilter(filter) {
    const modifiedFilter = { ...filter };
    if (modifiedFilter.brands === 'Enter the text' || modifiedFilter.brands === 'All') {
        modifiedFilter.brands = '';
    }
    if (modifiedFilter.price === 'All') {
        modifiedFilter.price = '';
    }

    return modifiedFilter;
}
