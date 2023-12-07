import {createSlice} from "@reduxjs/toolkit";
import {fetchDataThunk} from "./operations";

const initialState = {
    cars: [],
    loading: false,
    error: null
};

const carSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(fetchDataThunk.fulfilled, (state, { payload }) => {
                state.cars = payload;
                state.loading = false;
            })
            .addCase(fetchDataThunk.pending, (state, { payload }) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDataThunk.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
        })
    }
});

export const carsReducer = carSlice.reducer;
