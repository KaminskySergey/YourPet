import { createSlice } from "@reduxjs/toolkit";
import { initAuth } from "./initAuth";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage' 
import { register } from "./thunkAuth";


const authSlice = createSlice({
    name: 'auth',
    initialState: initAuth,
    extraReducers: builder => {
        builder.addCase(register.fulfilled, (state, {payload}) => {
      console.log(payload, 'payload')
            state.user = payload.data.user
            
            state.isLoadingUser = true;
        })
        .addCase(register.rejected, state => state)
        ///======================================================
    }
})


const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
}


export const authReducer = persistReducer(persistConfig, authSlice.reducer)