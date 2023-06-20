import { createSlice } from "@reduxjs/toolkit";
import { initAuth } from "./initAuth";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage' 
import { login, logout, refresh, register } from "./thunkAuth";


const authSlice = createSlice({
    name: 'auth',
    initialState: initAuth,
    extraReducers: builder => {
        builder.addCase(register.fulfilled, (state, {payload}) => {
            state.user = payload.newUser
            state.isLoadingUser = true;
        })
        .addCase(register.rejected, state => state)
        //======================================================
        .addCase(login.pending, state => state)
        .addCase(login.fulfilled, (state, {payload}) => {
            
        state.user.email = payload.email
        state.token = payload.token;
        state.isLoadingUser = true;
        })
        //=======================================================
        .addCase(logout.fulfilled, state => {
            state.user = { email: null };
            state.token = null;
            state.isLoggedIn = false
        })
        //=======================================================
        .addCase(refresh.pending, (state, {payload}) => {
            state.isRefreshingUser = true;
    
        })
        .addCase(refresh.fulfilled, (state, {payload}) => {
            state.user.email = payload.email
            state.isRefreshingUser = false;
            state.isLoadingUser = true;
            
            
            
        })
        .addCase(refresh.rejected, (state, { payload }) => {
            state.isRefreshingUser = false
        })
    }
})


const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
}


export const authReducer = persistReducer(persistConfig, authSlice.reducer)