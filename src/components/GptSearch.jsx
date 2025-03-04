import React from 'react'
import GptSearchbar from './GptSearchbar'
import Gptmovies from './Gptmovies'
import { banner } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
       <div className='absolute -z-10'>
        <img src={banner}
        alt="Netflix banner"/>
        </div>
        <GptSearchbar/>
        <Gptmovies/>
      
    </div>
  )
}

export default GptSearch
