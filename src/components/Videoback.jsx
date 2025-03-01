import React from 'react'
import useMovietrailer from '../hooks/useMovietrailer'
import { useSelector } from 'react-redux';


const Videoback = ({movieid}) => {
    const trailer=useSelector((store)=>store.movies?.trailerplay)
    useMovietrailer(movieid);
  
  return (
    <div className='w-screen'>
        <iframe className='w-screen aspect-video' 
        src={"https://www.youtube.com/embed/"+trailer?.key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
    
      
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" 
        >
        </iframe>
      
    </div>
  )
}

export default Videoback
