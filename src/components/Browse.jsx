import React from 'react'
import Header from './Header'
import useNowplaying from '../hooks/useNowplaying'
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';


const Browse = () => {
  useNowplaying();
  
  return (
    <div>
      <Header/>
      <Maincontainer/>
      <Secondarycontainer/>
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
