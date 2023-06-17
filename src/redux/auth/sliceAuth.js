import { createSlice } from "@reduxjs/toolkit";
import { initAuth } from "./initAuth";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage' 


const authSlice = createSlice({
    name: 'auth',
    initialState: initAuth,
    extraReducers: builder => {
        
    }
})


const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
}


export const authReducer = persistReducer(persistConfig, authSlice.reducer)