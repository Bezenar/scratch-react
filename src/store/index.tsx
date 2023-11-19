import { configureStore } from '@reduxjs/toolkit';
import { rickAndMortyApi } from './slices/RickAndMortyApi';

const store = configureStore({
    reducer: {
        [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});

export default store;
export type T_RootState = ReturnType<typeof store.getState>;
export type T_Dispatch = typeof store.dispatch;
