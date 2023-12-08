import {configureStore} from "@reduxjs/toolkit";
import {carsReducer} from "./carsSlice";
import {filterReducer} from "./filter/filterSlice";
import {favoritesReducer} from "./favorites/favoritesSlice";

export const store = configureStore({
    reducer: {
        carsList: carsReducer,
        filter: filterReducer,
        favorites: favoritesReducer
    }
})
