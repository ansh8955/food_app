import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css';

const Navbar = () => {


          const [page,setPage] = useState('home');
  return (
    <div className='navbar'>
      
      <img src={assets.logo} alt='logo' className='logo'/>
     <ul className='navbar-list'>

      <li onClick={()=>setPage("home") } className={page==="home"?"active":""}>Home</li>
      <li onClick={()=>setPage("Menu") } className={page==="Menu"?"active":""}>Menu</li>
      <li onClick={()=>setPage("Mobile-app") } className={page==="Mobile-app"?"active":""}>Mobile-app</li>
      <li onClick={()=>setPage("Contact Us") }className={page==="Contact Us"?"active":""}>Contact Us</li>

     </ul>

     <div className='nav-right'>

      <img src={assets.search_icon} alt='search'></img>

      <div className='search-icon'>

        <img src={assets.basket_icon} alt='' ></img>
        <div className='dot'></div>
      </div>
    <button className=''>Sign in</button>
     </div>


    </div>
  )
}

export default Navbar
