import {
  getDayTrendMovies,
  getMovieByKeyWord,
  getMovieCast,
  getMovieDetails,
  getMovieGenres,
  getMovieReviews,
  getSortedMovies,
  getTopRated,
  getWeekTrendMovies,
} from 'service/moviesAPI';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const topDayMoviesThunk = createAsyncThunk(
  'movie/topDay',
  async (_, thunkAPI) => {
    try {
      const moviesData = await getDayTrendMovies();
      return moviesData;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const topWeekMoviesThunk = createAsyncThunk(
  'movie/topWeek',
  async (_, thunkAPI) => {
    try {
      const moviesData = await getWeekTrendMovies();
      return moviesData;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const topRatedMoviesThunk = createAsyncThunk(
  'movie/topRated',
  async (_, thunkAPI) => {
    try {
      const moviesData = await getTopRated();
      return moviesData;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const movieDetailsThunk = createAsyncThunk(
  'movie/details',
  async (id, thunkAPI) => {
    try {
      const movieData = await getMovieDetails(id);
      return movieData;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const movieCastThunk = createAsyncThunk(
  'movie/cast',
  async (id, thunkAPI) => {
    try {
      const movieCastData = await getMovieCast(id);
      return movieCastData;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const movieReviewsThunk = createAsyncThunk(
  'movie/reviews',
  async (id, thunkAPI) => {
    try {
      const movieReviewsData = await getMovieReviews(id);
      return movieReviewsData;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const movieByKeyWordThunk = createAsyncThunk(
  'movie/byKeyWord',
  async (keyWord, thunkAPI) => {
    try {
      const movieByKeyWord = await getMovieByKeyWord(keyWord);
      return movieByKeyWord;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const movieGenresThunk = createAsyncThunk(
  'movie/genres',
  async (_, thunkAPI) => {
    try {
      const genres = await getMovieGenres();
      return genres;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const movieSortedThunk = createAsyncThunk(
  'movie/sortedMovies',
  async (data, thunkAPI) => {
    try {
      const movies = await getSortedMovies(data);
      return movies;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
