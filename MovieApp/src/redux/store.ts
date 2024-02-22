import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice';
import loadingReducer from './loadingReducer';
  
const store = configureStore({
  reducer: {
    movies: moviesReducer,
    loader:loadingReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;