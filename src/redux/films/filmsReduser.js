import {
  movieByKeyWordThunk,
  movieCastThunk,
  movieDetailsThunk,
  movieReviewsThunk,
  topDayMoviesThunk,
  topWeekMoviesThunk,
  topRatedMoviesThunk,
  movieGenresThunk,
  movieSortedThunk,
} from './filmsOperations';

import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  dayTopMovies: [],
  weekTopMovies: [],
  topRatedMovies: [],
  searchedMovies: [],
  genres: [],
  filmData: {
    data: null,
    cast: null,
    reviews: null,
  },
  isLoading: false,
  error: null,
};
const moviesSlice = createSlice({
  name: 'moviesDetails',
  initialState: INITIAL_STATE,
  reducers: {
    handlResetFilmData(state, _) {
      state.filmData = {
        data: null,
        cast: null,
        reviews: null,
      };
    },
    handlResetSearch(state, _) {
      state.searchedMovies = [];
    },
  },
  extraReducers: builder =>
    builder
      .addCase(topDayMoviesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dayTopMovies = action.payload.results;
      })

      .addCase(topWeekMoviesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.weekTopMovies = action.payload.results;
      })

      .addCase(topRatedMoviesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.topRatedMovies = action.payload.results;
      })

      .addCase(movieByKeyWordThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.searchedMovies = action.payload;
      })

      .addCase(movieDetailsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.filmData.data = action.payload;
      })

      .addCase(movieCastThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.filmData.cast = action.payload;
      })

      .addCase(movieReviewsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.filmData.reviews = action.payload.results;
      })
      .addCase(movieGenresThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.genres = action.payload.genres;
      })
      .addCase(movieSortedThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.searchedMovies = action.payload;
      })

      .addMatcher(
        isAnyOf(
          topDayMoviesThunk.pending,
          topWeekMoviesThunk.pending,
          topRatedMoviesThunk.pending,
          movieByKeyWordThunk.pending,
          movieDetailsThunk.pending,
          movieCastThunk.pending,
          movieReviewsThunk.pending,
          movieGenresThunk.pending,
          movieSortedThunk.pending
        ),
        (state, action) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          topDayMoviesThunk.rejected,
          topWeekMoviesThunk.rejected,
          topRatedMoviesThunk.rejected,
          movieByKeyWordThunk.rejected,
          movieDetailsThunk.rejected,
          movieCastThunk.rejected,
          movieReviewsThunk.rejected,
          movieGenresThunk.rejected,
          movieSortedThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const { handlResetFilmData, handlResetSearch } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
