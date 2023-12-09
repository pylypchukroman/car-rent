import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentPage: 1
}

const currentPageSlice = createSlice({
    name: 'currentPage',
    initialState,
    reducers: {
        setCurrentPage: (state, { payload }) => {
            state.currentPage = payload;
        }
    }
});

export const { setCurrentPage } = currentPageSlice.actions;
export const currentPageReducer = currentPageSlice.reducer;
