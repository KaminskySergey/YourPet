import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const allPets = createAsyncThunk('pets/all', async (credential, thunkAPI) => {
    try {
        const {data} = await axios.get('/pets')
        return data.result
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

export const allPetsById = createAsyncThunk('pets/ById', async (userId, thunkAPI) => {
    
    try {
        const {data} = await axios.get(`/pets/currentPets`)
        console.log(data, 'byId')
        return data.result
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

export const createPets = createAsyncThunk('pets/create', async (credential, thunkAPI) => {
    try {
        const {data} = await axios.post('pets', credential)
        return data.result
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})