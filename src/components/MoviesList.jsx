import React from 'react'
import Moviecard from './Moviecard'

const MoviesList = ({title,movie}) => {
 
 
  return (
    <div className='px-6' >
       <h1 className='font-bold py-4 text-3xl text-white'>{title}</h1>
      <div className='flex overflow-x-scroll scrollbar-hide '>
     
      <div className='flex'>
        {movie?.map((movie)=>
        <Moviecard key={movie.id} Posterpath={movie?.poster_path} />)}
      </div>
    </div>
    </div>
  )
}

export default MoviesList

