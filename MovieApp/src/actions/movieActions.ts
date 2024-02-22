// moviesActions.ts

import { fetchMovies } from "../api";
import { AppDispatch } from "../store";
import { setMovies } from "../redux/moviesSlice";
import { setLoading } from "./loadingAction";

export const getMovies = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));

      const movies = await fetchMovies();
      dispatch(setMovies(movies));
    } catch (error) {
      console.error('Error fetching movies:', error);
    }finally {
      dispatch(setLoading(false)); 
    }
  };
};
