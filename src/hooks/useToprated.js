import { useDispatch } from "react-redux";
import { API_options } from "../utils/constants";
import { addtop} from "../utils/movieslice";
import { useEffect } from "react";

const useToprated=()=>{
    const dispatch=useDispatch();
const nowplaying=async function()
{
    const data=await 
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_options)
    const json=await data.json();
   
  
    dispatch(addtop(json.results));

}
useEffect(()=>{
  nowplaying()
},[])

}
export default useToprated;