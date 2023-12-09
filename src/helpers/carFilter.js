export function carFilter(cars, filter) {
    return cars.filter(car => {
        const nameMatch = filter.brands ? car.make === filter.brands : true;
        const priceMatch = filter.price ? extractCorrectPrice(car.rentalPrice) <= filter.price : true;
        const mileageFromMatch = filter.mileage.from ? car.mileage >= filter.mileage.from : true;
        const mileageToMatch = filter.mileage.to ? car.mileage <= Number(filter.mileage.to) : true;
        return nameMatch && priceMatch && mileageFromMatch && mileageToMatch;
    });
}

function extractCorrectPrice(price) {
    return parseInt(price.slice(1), 10);
}
