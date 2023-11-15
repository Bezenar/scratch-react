import { configureStore } from '@reduxjs/toolkit';
import { rickAndMortyApi } from './rickAndMortyApi';

const store = configureStore({
    reducer: {
        [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});

export default store;
