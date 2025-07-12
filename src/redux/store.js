import { configureStore } from '@reduxjs/toolkit';
import { authorizationReducer } from './authorization/authReduser';
import { moviesReducer } from './films/filmsReduser';

import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authConfig = {
  key: 'authorization',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    films: moviesReducer,
    authorization: persistReducer(authConfig, authorizationReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
