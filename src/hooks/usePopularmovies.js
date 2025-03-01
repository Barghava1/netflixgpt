import { useDispatch } from "react-redux";
import { API_options } from "../utils/constants";
import {  addpopular } from "../utils/movieslice";
import { useEffect } from "react";

const usePopularmovies=()=>{
const dispatch=useDispatch();
const nowplaying=async function()
{
    const data=await 
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_options)
    const json=await data.json();
   
  
    dispatch(addpopular(json.results));

}
useEffect(()=>{
  nowplaying()
},[])
}
export default usePopularmovies;