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

export const allPetsById = createAsyncThunk('pets/ById', async (credential, thunkAPI) => {
    
    try {
        const {data} = await axios.get(`/pets/currentPets`)
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

export const deletePets = createAsyncThunk('pets/delete', async (id, thunkAPI) => {
    console.log(id, 'credentialcredentialcredential')
    try {
        await axios.delete(`pets/${id}`)
        return id
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})