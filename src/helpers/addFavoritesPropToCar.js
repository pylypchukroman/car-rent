export function addFavoritePropToCar(carsList, favoritesList) {
    return carsList.map(car => {
        if (favoritesList.includes(car.id)) {
            return {
                ...car,
                favorites: true
            };
        } else {
            return {
                ...car,
                favorites: false
            };
        }
    })
}
