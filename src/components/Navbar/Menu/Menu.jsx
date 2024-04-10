import React from 'react';
import './menu.css';
import { menu_list } from '../../../assets/assets';

const Menu = ({category,setCategory}) => {
  return (
    <div className='menu'>

<h1> Explore Our Menu's Treasures</h1>
<p className='menu-text'>Indulge in a culinary journey like no other as you explore our menu brimming with tantalizing delights. </p>

<div className='menu-list'>

{menu_list.map((item,index)=>{

  return(
    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className='list' key={index}>

<img className={category===item.menu_name?"active":""} src={item.menu_image} alt=''/>
<p >{item.menu_name}</p>

    </div>
  )
})}

</div>

<hr/>
    </div>
  )
}

export default Menu