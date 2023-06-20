import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const allPets = createAsyncThunk('pets/all', async (credential, thunkAPI) => {
    try {
        const {data} = await axios.get('/pets')
        console.log(data, 'allPets')
        return data.result
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})