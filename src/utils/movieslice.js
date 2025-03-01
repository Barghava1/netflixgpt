import { createSlice } from "@reduxjs/toolkit";

const movieslice=createSlice({
    name:"movies",
    initialState:{
      nowplaying:null,
      trailerplay:null,
      popular:null,
      upcoming:null,
      toprated:null
    },
    reducers:{
        addnowplaying:(state,action)=>{
            state.nowplaying=action.payload
        },
        addpopular:(state,action)=>{
            state.popular=action.payload
        },
        addup:(state,action)=>{
            state.upcoming=action.payload
        },
        addtop:(state,action)=>{
            state.toprated=action.payload
        },

       

        addplayvideo:(state,action)=>{
            state.trailerplay=action.payload
        }

    }
})
export const {addnowplaying,addplayvideo,addpopular,addup,addtop}=movieslice.actions;
export default movieslice.reducer