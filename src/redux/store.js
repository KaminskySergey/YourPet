import { configureStore } from '@reduxjs/toolkit'
import { initAuth } from './auth/initAuth'
import { authReducer } from './auth/sliceAuth'
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import persistStore from 'redux-persist/es/persistStore'

const initialState = {
auth: initAuth
}

export const store = configureStore({
  preloadedState: initialState,
  devTools: true,
  reducer: {
    auth: authReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);