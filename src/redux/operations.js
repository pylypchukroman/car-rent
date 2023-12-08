import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://6570667109586eff66414c7c.mockapi.io/';

export const fetchDataThunk = createAsyncThunk('fetchAllCars', async (_, thunkApi) => {
    try {
        const { data } = await axios.get('adverts');
        // console.log(thunkApi.getState().favorites.favoritesList)
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})
