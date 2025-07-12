import {
  logOutThunk,
  loginThunk,
  refreshThunk,
  registerThunk,
} from './authOperations';
import Notiflix from 'notiflix';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  token: null,
  user: {
    email: null,
    userName: null,
  },
  authenticated: false,
  isLoading: false,
  error: null,
};
const authorizationSlice = createSlice({
  name: 'authorization',
  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
        Notiflix.Notify.success('Успішно зареєстровано');
      })

      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
        Notiflix.Notify.info('Авторизовано успішно');
      })

      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticated = true;
        state.user = action.payload;
      })
      .addCase(logOutThunk.fulfilled, (state, action) => {
        return INITIAL_STATE;
      })
      .addMatcher(
        isAnyOf(
          logOutThunk.pending,
          registerThunk.pending,
          loginThunk.pending,
          refreshThunk.pending
        ),
        (state, action) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          logOutThunk.rejected,
          registerThunk.rejected,
          loginThunk.rejected,
          refreshThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const authorizationReducer = authorizationSlice.reducer;
