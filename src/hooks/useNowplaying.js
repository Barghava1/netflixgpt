import { useDispatch } from "react-redux";
import { API_options } from "../utils/constants";
import { addnowplaying } from "../utils/movieslice";
import { useEffect } from "react";

const useNowplaying=()=>{
const dispatch=useDispatch();
const nowplaying=async function()
{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_options)
    const json=await data.json();
  
    dispatch(addnowplaying(json.results));

}
useEffect(()=>{
  nowplaying()
},[])
}
export default useNowplaying;