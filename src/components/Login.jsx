import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignin,setIssign]=useState(true);
    const togglesign=()=>{
        setIssign(!isSignin)

    }
  return (
    <div >
          <Header/>
          <div className='absolute'>
        <img src="https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg"
        alt="Netflix banner"/>
        </div>
        <form className=' opacity-90 w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg '>
            <h1 
            className='font-bold text-xl py-4'>{isSignin?"Sign In":"Sign Up"}
            </h1>
            {!isSignin&&<input type='text' placeholder='Enter Full name' 
            className='p-2 my-4 text-black bg-gray-700 w-full rounded-lg'/>}
            <input type='text' placeholder='Email' className='p-2 my-4 text-black bg-gray-700 w-full rounded-lg'/>
            <input type='password' placeholder='Password' className='p-2 my-4 text-black bg-gray-700 w-full rounded-lg'/>
            {!isSignin&&<input type='password' placeholder='Confirm Password' className='p-2 my-4 text-black bg-gray-700 w-full rounded-lg'/>}
            <button className='p-4  my-6 bg-red-700 w-full rounded-lg'>{isSignin?"Sign In":"Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={togglesign} >{isSignin?"New to Netflix? Sign Up":" Already a User? Sign In"}</p>
        </form>
      
      
    </div>
  )
}

export default Login
