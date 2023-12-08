import {configureStore} from "@reduxjs/toolkit";
import {carsReducer} from "./carsSlice";
import {filterReducer} from "./filter/filterSlice";

export const store = configureStore({
    reducer: {
        carsList: carsReducer,
        filter: filterReducer
    }
})
