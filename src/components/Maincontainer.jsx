import React from 'react'
import Videoback from './Videoback'
import { useSelector } from 'react-redux'
import Videotitle from './Videotitle'

const Maincontainer = () => {
    const movies=useSelector(store=>store.movies?.nowplaying)
    if(!movies) return;
    const mainmovie=movies[0];
  
    const {original_title,overview,id}=mainmovie;
  return (
    <div>
       <Videotitle title={original_title} overview={overview}/>
       <Videoback movieid={id}/>
      
    </div>
  )
}

export default Maincontainer
