import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer'>

<div className='footer-content'>

<div className='left-content'>

<img src={assets.logo}/>

<p>From the freshest ingredients to the finest techniques, we're dedicated to elevating your palate and creating memories that linger long after the last bite</p>

<div className='social-icons'>

  <img src={assets.facebook_icon}/>
  <img src={assets.twitter_icon}/>
  <img src={assets.linkedin_icon}/>
</div>

</div>
<div className='center'>

  <h2>Company</h2>

  <ul>

    <li>Home</li>
    <li>About Us</li>
    <li>Delivery</li>
    <li>Privacy Policy</li>
  </ul>
</div>

<div className='right-content'>

<h2>Get IN Touch</h2>

<ul>

  <li>+91 7818949809</li>
  <li>contact@tomato.com</li>
</ul>
</div>
</div>


<hr/>
<p className='copyright'> Copyright2024 @Tomato.com - All rights Reserved</p>
    </div>


  )
}

export default Footer