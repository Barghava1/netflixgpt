import { useDispatch } from "react-redux";
import { addplayvideo } from "../utils/movieslice";
import { useEffect } from "react";
import { API_options } from "../utils/constants";


const useMovietrailer=(movieid)=>{
    const dispatch=useDispatch();
    const play=async function(){
        const data=await fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`, API_options)
        const json=await data.json();
        (json);
        const filterdata=json.results.filter((video)=>video.type==="Trailer");
    const trailer=filterdata.length?filterdata[0]:json.results[0];
   
    dispatch(addplayvideo(trailer));
    }
    
    useEffect(()=>{
        play();
    },[])

}
export default useMovietrailer;