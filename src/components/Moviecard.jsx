import React from 'react'
import { IMG_URL } from '../utils/constants'

const Moviecard = ({Posterpath}) => {
    console.log(Posterpath)
  return (
    <div className='w-42 pr-4' >
      <img alt="Movie poster"
      src={IMG_URL+Posterpath}/>
    </div>
  )
}

export default Moviecard

