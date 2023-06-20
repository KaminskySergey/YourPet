import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://your-pet-backend.vercel.app/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const setClearHeader = () => {
  axios.defaults.headers.common.Authorization = null;
};

export const register = createAsyncThunk(
    'auth/register', 
    async (credentials, thunkAPI) => {
        try {
            const {data} = await axios.post('/auth/register', credentials)
            console.log(data, 'data')
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    })


    export const login = createAsyncThunk(
      'auth/login',
      async (credentials, thunkAPI) => {
        try {
          const {data} = await axios.post('/auth/login', credentials)
          setAuthHeader(data.result.token)
          return data.result
        } catch (error) {
          return thunkAPI.rejectWithValue(error);
        }
      }
    )

    export const logout = createAsyncThunk(
      'auth/logout',
      async (_, thunkAPI) => {
        try {
          await axios.get('/auth/logout')
          setClearHeader()
        } catch (error) {
          return thunkAPI.rejectWithValue(error);
        }
      }
    )

    export const refresh = createAsyncThunk(
      'auth/refresh',
      async (_, thunkAPI) => {
        const {token} = thunkAPI.getState().auth;
        
        if(!token){
          return thunkAPI.rejectWithValue('Not Valid Token');
        }
        setAuthHeader(token)

        try {
          const {data} = await axios.get('/auth/current')
          return data.userLogin
        } catch (error) {
          return thunkAPI.rejectWithValue(error);
        }
      }
    )


  