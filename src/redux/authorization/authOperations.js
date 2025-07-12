import {
  reqestLogIn,
  reqestLogOut,
  reqestRefresh,
  reqestRegister,
  setToken,
} from '../../service/filmFinderAPI';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      const auth = await reqestRegister(formData);
      console.log('auth: ', auth);
      return auth;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (formData, thunkAPI) => {
    try {
      const auth = await reqestLogIn(formData);
      return auth;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.authorization.token;
    try {
      setToken(token);
      const auth = await reqestRefresh();
      return auth;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const token = state.authorization.token;
      if (!token) return false;
      return true;
    },
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await reqestLogOut();
      return;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
