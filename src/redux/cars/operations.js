import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://6570667109586eff66414c7c.mockapi.io/';

export const fetchDataThunk = createAsyncThunk('fetchAllCars', async (_, thunkApi) => {
    try {
        const { data } = await axios.get('adverts');
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export  const fetchCarsByPage = createAsyncThunk('fetchCarsByPage', async (page, thunkApi) => {
    try {
        const { data } = await axios.get(`adverts?limit=12&page=${page}`);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
})


