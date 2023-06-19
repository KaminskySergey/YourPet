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