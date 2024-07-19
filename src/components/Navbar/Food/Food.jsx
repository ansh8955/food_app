import React, { useContext } from 'react';
import './Food.css';
import { StoreContext } from '../../../Context/StoreContext';
import Items from '../../FoodItems/Items';


const Food = ({category}) => {


const {food_list} = useContext(StoreContext)

  return (
    <div className='food-list'>

      <h2>Dishes near you</h2>

     <div className='food-item-list'>
     { food_list.map((item,index)=>{

      if(category==="All" || category === item.category){

        return <Items key = {index}  value = {item} id = {item._id} name = {item.name} description={item.description} image={item.image} price={item.price}/>
      }

     })
     }
     </div>
    </div>
  )
}

export default Food