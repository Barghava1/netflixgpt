import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkvalidate } from '../utils/validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
const Login = () => {

  const [isSignin, setIssign] = useState(true);
  const [errormessage, seterrormessage] = useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);


  const handlevalidate = () => {
    const emailValue = email.current?.value;
    const passwordValue = password.current?.value;
    const nameValue = !isSignin ? name.current?.value : undefined;

  const message = checkvalidate(emailValue, passwordValue, nameValue);
    seterrormessage(message);
    if (message) return;
  
    if (!isSignin) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user =userCredential.user
          console.log("User Created:",user);
          updateProfile(user, {
            displayName: nameValue, photoURL: "https://pbs.twimg.com/media/GCyjBf0XsAAAH3E.png",
          }).then(() => {

            const {uid,email,displayName,photoURL} = auth.currentUser;
            dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL }))
            navigate("/browse");
            
          }).catch((error) => {
            seterrormessage(error); 
          });
        
         
        })
        .catch((error) => {
          console.error("Error:", error.message);
          seterrormessage(error.message);
        });
    } else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          console.log("User Signed In:", userCredential.user);
          seterrormessage(""); 
          navigate("/browse");
        })
        .catch((error) => {
          console.error("Error:", error.message);
          seterrormessage(error.message);
        });
    }
  };
  

  const togglesign = () => {
    setIssign(!isSignin);
    seterrormessage(""); // Clear error message on toggle
  };
  return (
    <div >
          <Header/>
          <div className='absolute'>
        <img src="https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg"
        alt="Netflix banner"/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} 
        className=' opacity-90 w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg '>
            <h1 
            className='font-bold text-xl py-4'>{isSignin?"Sign In":"Sign Up"}
            </h1>
            {!isSignin&&<input type='text' ref={name} placeholder='Enter Full name' 
            className='p-2 my-4 text-white bg-gray-700 w-full rounded-lg'/>}

            <input type='text' placeholder='Email' ref={email}
             className='p-2 my-4 text-white bg-gray-700 w-full rounded-lg'/>

            <input type='password' placeholder='Password' ref={password}
            className='p-2 my-4 text-white bg-gray-700 w-full rounded-lg'/>

           
             <p className='text-red-500 font-bold text-lg py-2'>{errormessage}</p>

            <button className='p-4  my-6 bg-red-700 w-full rounded-lg cursor-pointer' onClick={handlevalidate}>
                {isSignin?"Sign In":"Sign Up"}
                </button>

            <p className='py-4 cursor-pointer' onClick={togglesign} >
                {isSignin?"New to Netflix? Sign Up":" Already a User? Sign In"}
                </p>
        </form>
      
      
    </div>
  )
}

export default Login
