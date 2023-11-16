import { configureStore } from '@reduxjs/toolkit';
import { rickAndMortyApi } from './slices/RickAndMortyApi';
import pagination from './slices/pagination';

const store = configureStore({
    reducer: {
        [pagination.name]: pagination.reducer,
        [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});

export default store;
export type T_RootState = ReturnType<typeof store.getState>;
export type T_Dispatch = typeof store.dispatch;
