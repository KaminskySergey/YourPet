import { createSlice } from "@reduxjs/toolkit";
import { initPets } from "./initPets";
import { allPets } from "./thunkPets";


const patsSlice = createSlice({
    name: 'pats',
    initialState: initPets,
    extraReducers: builder => {
        builder.addCase(allPets.pending, (state, {payload}) => {
      
            state.isLoading = true;
          })
          .addCase(allPets.fulfilled, (state, {payload}) => {
            console.log(payload, 'payloadpayload')
              state.pets = [...payload];
            state.isLoading = false;
            state.error = null;
          })
          .addCase(allPets.rejected, (state, {payload}) => {
            
            state.isLoading = false;
            state.error = payload;
          })
    }
})



export const petsReducer = patsSlice.reducer