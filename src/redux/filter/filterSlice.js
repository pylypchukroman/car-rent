import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    filter: {
        brand: "",
        price: "",
        mileage: {
            from: "",
            to: ""
        }
    }
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, {payload}) => {
            state.filter = payload;
        }
    }
})

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;