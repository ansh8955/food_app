import React, { useContext, useState } from 'react';
import './Items.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const Items = ({id,name,price,description,image}) => {

const [count,setCount] = useState(0);
const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className='food_card'>

<div className='food_img'>

  <img  className ="foodimg "src={image} alt='food_img'/>

  {!cartItems[id] ? 
  <img className="add" onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="add_icon" />
 : 
  <div className='food-counter'>

<img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red}/>
<p>{cartItems[id]}</p>
<img onClick={()=>addToCart(id)} src={assets.add_icon_green}/>

  </div>
}

</div>

<div className='food_info'>

<div className='food_rating'>
<p>{name}</p>
<img src={assets.rating_starts} alt='rating'/>

</div>
<p className='desc'>{description}</p>
<p className='price'>${price}</p>

</div>
    </div>
  )
}

export default Items