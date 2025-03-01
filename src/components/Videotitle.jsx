import React from 'react'

const Videotitle = ({title,overview}) => {
  return (
    <div className=' w-scren aspect-video pt-[10%] px-24 absolute text-white bg-gradient-to-r from to-black'> 
    <div>
        <h1 className='font-bold text-6xl'>{title}</h1>
        <p className='w-1/4 text-lg py-6 '>{overview}</p>
        </div>
        <div>
        <button className='bg-white text-black p-3 px-12 text-xl hover:opacity-70 rounded-lg cursor-pointer'>
          ▶️ Play</button>
        <button className= 'mx-2 bg-gray-500 text-white p-3 px-12 text-xl opacity-50 rounded-lg cursor-pointer'>
            More info</button>
        </div>
      
    </div>
  )
}

export default Videotitle
