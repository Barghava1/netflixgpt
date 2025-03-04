import React, { useRef } from 'react'
import lang from '../utils/language'
import { useSelector } from 'react-redux'
import openai from '../utils/openai'

const GptSearchbar = () => {
  const langkey=useSelector((store)=>store.config.lang)
  const search=useRef();
  const handleopenai=async ()=>{

    const gptsearch= await openai.chat.completions.create({
        messages: [{ role: 'user', content:search.current.value}],
        model:'gpt-4o',
      });
    
    console.log( gptsearch?.choices[0]?.message?.content||"No response");
  }

  
  return (
    <div className='pt-[8%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input type="text" placeholder={lang[langkey].gptplaceholder}
            className='p-4 m-4 col-span-9 bg-amber-50 ' ref={search}/>
            <button className=' text-white m-4 col-span-3 py-2 px-4 bg-red-700 rounded-lg cursor-pointer' onClick={handleopenai}>
             {lang[langkey].search}
              </button>
        </form>
      
    </div>
  )
}

export default GptSearchbar
