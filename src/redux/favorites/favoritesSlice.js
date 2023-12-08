import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    favoritesList: []
};

const filterSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        setFavorites: (state, {payload}) => {
            const exist = state.favoritesList.includes(payload);
            if (exist) {
                const index = state.favoritesList.indexOf(payload)
                state.favoritesList.splice(index, 1);
            } else {
                state.favoritesList.push(payload);
            }
        }
    }
})

export const { setFavorites } = filterSlice.actions;
export const favoritesReducer = filterSlice.reducer;

