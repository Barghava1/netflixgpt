import { createSlice } from "@reduxjs/toolkit";

const gptslice=createSlice({
    name:"gpt",
    initialState:{
        showgpt:false,

    },
    reducers:{
        togglegpt:(state,action)=>{
            state.showgpt=!state.showgpt;

        }
    }
})
export const {togglegpt}=gptslice.actions;
export default gptslice.reducer;