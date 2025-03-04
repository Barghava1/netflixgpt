import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { Logo, SUPPORTEDLANG } from '../utils/constants';
import { togglegpt } from '../utils/gptslice';
import { chnagelang } from '../utils/configslice';


const Header = () => {
  const showgpt=useSelector((store)=>store.gpt.showgpt);
  const user=useSelector(store=>store.user)
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handlelogout=()=>{
    signOut(auth).then(() => {
   
    }).catch((error) => {
      
    });
  };
  useEffect(()=>{
  const unsubscribe=  onAuthStateChanged(auth, (user) => {
        if (user) {
          
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL }))
          navigate("/browse");
         
          // ...
        } else {
            dispatch(removeUser())
            navigate("/");
         
        }
      });
      // unsubscribe from auth when component un mount
      return ()=> unsubscribe();


},[])
const handlegptsearch=()=>{
  //Toggle functionality
  dispatch(togglegpt())
}
const handlelang=(e)=>{
  dispatch(chnagelang(e.target.value));
}
  
  return (
  
    <div className='flex justify-between w-screen absolute px-4 py-2 bg-gradient-to-bl from to-black z-30 items-center'>
    <img src={Logo} alt="Netflix logo" className='w-24 sm:w-32' />
  
    {user && (
      <div className='flex items-center space-x-2 sm:space-x-4'>
        {showgpt && (
          <select className='my-2 bg-amber-50 text-sm sm:text-base' onChange={handlelang}>
            {SUPPORTEDLANG.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        )}
        <button
          className='py-1 px-2 sm:py-2 sm:px-4 bg-purple-800 text-white rounded-lg cursor-pointer text-sm sm:text-base'
          onClick={handlegptsearch}
        >
          {showgpt ? "Homepage" : "Gptsearch"}
        </button>
        <img src={user?.photoURL} alt="netflix" className='w-8 sm:w-12 rounded-full' />
        <button className='font-bold text-white cursor-pointer text-sm sm:text-base' onClick={handlelogout}>
          Sign out
        </button>
      </div>
    )}
  </div>
  
     

    
  )
}

export default Header
