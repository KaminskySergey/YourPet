import { createSlice } from "@reduxjs/toolkit";
import { initPets } from "./initPets";
import { allPets, allPetsById, createPets, deletePets } from "./thunkPets";


const patsSlice = createSlice({
    name: 'pats',
    initialState: initPets,
    extraReducers: builder => {
        builder.addCase(allPets.pending, (state, {payload}) => {
      
            state.isLoading = true;
          })
          .addCase(allPets.fulfilled, (state, {payload}) => {
           
              state.pets = [...payload];
            state.isLoading = false;
            state.error = null;
          })
          .addCase(allPets.rejected, (state, {payload}) => {
            
            state.isLoading = false;
            state.error = payload;
          })
          // createPets
          .addCase(createPets.pending, (state, {payload}) => {
            
            state.isLoading = true;
          })
          .addCase(createPets.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.pets = [...state.pets, payload];
          })
          // allPetsById
          .addCase(allPetsById.pending, (state, {payload}) => {
            state.isLoading = true;
          })
          .addCase(allPetsById.fulfilled, (state, {payload}) => {
            state.petsCurrentUser = [...payload];
            state.isLoading = false;
            state.error = null;
          })
          // deletePets
          .addCase(deletePets.pending, (state, {payload}) => {
            state.isLoading = true;
          })
          .addCase(deletePets.fulfilled, (state, {payload}) => {
            console.log(payload, 'payloadpayloadpayload')
            state.petsCurrentUser = state.petsCurrentUser.filter(item => item._id !== payload)
            state.isLoading = false;
          })
          .addCase(deletePets.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
          })
    }
})



export const petsReducer = patsSlice.reducer