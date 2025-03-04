import React from 'react'
import lang from '../utils/language'
import { useSelector } from 'react-redux'

const GptSearchbar = () => {
  const langkey=useSelector((store)=>store.config.lang)
  return (
    <div className='pt-[8%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'>
            <input type="text" placeholder={lang[langkey].gptplaceholder}
            className='p-4 m-4 col-span-9 bg-amber-50 '/>
            <button className=' text-white m-4 col-span-3 py-2 px-4 bg-red-700 rounded-lg'>
             {lang[langkey].search}
              </button>
        </form>
      
    </div>
  )
}

export default GptSearchbar
