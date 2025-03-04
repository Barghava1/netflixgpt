import { createSlice } from "@reduxjs/toolkit";

const configslice=createSlice({
    name:"config",
    initialState:{
        lang:"en"

    },
    reducers:{
        chnagelang:(state,action)=>{
            state.lang=action.payload
        }
    }
})
export const{chnagelang}=configslice.actions;
export default configslice.reducer;