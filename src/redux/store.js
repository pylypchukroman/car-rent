import {configureStore} from "@reduxjs/toolkit";
import {carsReducer} from "./carsSlice";
import {filterReducer} from "./filter/filterSlice";
import {favoritesReducer} from "./favorites/favoritesSlice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    version: 1,
    storage
};

const persistedReducer = persistReducer(persistConfig, favoritesReducer)

export const store = configureStore({
    reducer: {
        carsList: carsReducer,
        filter: filterReducer,
        favorites: persistedReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools: process.env.NODE_ENV !== 'production'
});

export const persistor = persistStore(store);
