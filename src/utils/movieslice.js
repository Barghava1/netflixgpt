import { createSlice } from "@reduxjs/toolkit";

const movieslice=createSlice({
    name:"movies",
    initialState:{
      nowplaying:null,
      trailerplay:null
    },
    reducers:{
        addnowplaying:(state,action)=>{
            state.nowplaying=action.payload
        },
        addplayvideo:(state,action)=>{
            state.trailerplay=action.payload
        }

    }
})
export const {addnowplaying,addplayvideo}=movieslice.actions;
export default movieslice.reducer