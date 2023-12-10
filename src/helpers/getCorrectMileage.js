export function getCorrectMileage(mileage) {
    return mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
