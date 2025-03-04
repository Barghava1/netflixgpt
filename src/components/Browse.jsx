import React from 'react'
import Header from './Header'
import useNowplaying from '../hooks/useNowplaying'
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';
import usePopularmovies from '../hooks/usePopularmovies';
import useUpcoming from '../hooks/useUpcoming';
import useToprated from '../hooks/useToprated';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {
  const showgpt=useSelector(store=>store.gpt.showgpt);
  useNowplaying();
  usePopularmovies();
  useUpcoming();
  useToprated();
  
  
  return (
    <div>
      <Header/>
      {
        showgpt ? ( <GptSearch/>):
       ( <>
       <Maincontainer/>
      <Secondarycontainer/>
      </>
        )
      }
     
    
      {
        /*
        Main container
        --Video Background
        --Video title
        Secondary Container
          --Movielist*n
          --n*n cards
         */
      }
      
    </div>
  )
}

export default Browse
