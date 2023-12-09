import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    favoritesList: []
};

const filterSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        setFavorites: (state, {payload}) => {
            const exist = state.favoritesList.includes(payload); // check if selected car already in the favorites list
            if (exist) {
                const index = state.favoritesList.indexOf(payload)
                state.favoritesList.splice(index, 1); //remove from favorites
            } else {
                state.favoritesList.push(payload); // add to favorites
            }
        }
    }
})

export const { setFavorites } = filterSlice.actions;
export const favoritesReducer = filterSlice.reducer;

