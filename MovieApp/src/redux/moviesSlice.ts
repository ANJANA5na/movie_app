import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Movie {
  id: number;
  title: string;
  overview: string;
  original_language: string;
  original_title: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  adult: false;
  backdrop_path: string;
}

interface MovieState {
  movies: Movie[];
}

const initialState: MovieState = {
  movies: [],
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    },
  },
});

export const { setMovies } = movieSlice.actions;
export default movieSlice.reducer;

