import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className='app' id='app'>

    <p>For better Experince Download<br/>Tomoato App</p>

    <div className='download-platform'>
       <img src={assets.play_store}/>
       <img src={assets.app_store}/>

    </div>
    
    
    
    </div>
  )
}

export default AppDownload