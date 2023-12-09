import {createSlice, isAnyOf} from "@reduxjs/toolkit";
import {fetchCarsByPage, fetchDataThunk} from "./operations";

const initialState = {
    cars: [],
    carsByPage: [],
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

            .addCase(fetchCarsByPage.fulfilled, (state, { payload }) => {
                state.carsByPage = payload;
                state.loading = false;
            })

            .addMatcher(
                isAnyOf(fetchDataThunk.pending, fetchCarsByPage.pending), (state, { payload }) => {
                    state.loading = true;
                    state.error = null;
                }
            )

            .addMatcher(
                isAnyOf(fetchDataThunk.rejected, fetchCarsByPage.rejected), (state, { payload }) => {
                    state.loading = false;
                    state.error = payload;
                }
            )
            // .addCase(fetchDataThunk.pending, (state, { payload }) => {
            //     state.loading = true;
            //     state.error = null;
            // })
        //     .addCase(fetchDataThunk.rejected, (state, { payload }) => {
        //         state.loading = false;
        //         state.error = payload;
        // })
    }
});

export const carsReducer = carSlice.reducer;
