import React from 'react'

import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'

const Secondarycontainer = () => {
  const movie=useSelector((store)=>store.movies)

  
  return movie.nowplaying&& (
    <div className='bg-black'>
      <div className='-mt-72 pl-6 relative z-30'>
       <MoviesList title={"Now playing"} movie={movie.nowplaying}/>
       <MoviesList title={"Top rated"} movie={movie.toprated}/>
       <MoviesList title={"Upcoming"} movie={movie.upcoming}/>
       <MoviesList title={"Popular"} movie={movie.popular}/>
       <MoviesList title={"Hrror"} movie={movie.nowplaying}/>
      
    </div>
    </div>
  )
}

export default Secondarycontainer
