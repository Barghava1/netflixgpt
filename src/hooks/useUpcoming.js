import { useDispatch } from "react-redux";
import { API_options } from "../utils/constants";
import { addup } from "../utils/movieslice";
import { useEffect } from "react";

const useUpcoming=()=>{
    const dispatch=useDispatch();
const nowplaying=async function()
{
    const data=await 
    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_options)
    const json=await data.json();
   
  
    dispatch(addup(json.results));

}
useEffect(()=>{
  nowplaying()
},[])

}
export default useUpcoming;