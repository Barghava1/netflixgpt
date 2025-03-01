import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { Logo } from '../utils/constants';


const Header = () => {
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
  
  return (
  
    <div className=' flex justify-between w-screen absolute  px-4 py-2  bg-gradient-to-bl from to-black z-30'>
      <img src={Logo}
      alt="Netflix logo"
      className='w-32'/>
    
 
  {user && (<div className='flex justify-between '>
    <img src={user?.photoURL}
    alt="netflix"
    className='w-12'/>
    <button className='font-bold text-white cursor-pointer' onClick={handlelogout}>Sign out</button>
  </div>
)}
  </div>
     

    
  )
}

export default Header
