import React, { useContext } from 'react';
import './Order.css';
import { StoreContext } from '../../Context/StoreContext';

const Order = () => {


  const {totalAmount} = useContext(StoreContext);
  return (
    <form className='order'>
<div className='left-order'>

<p className='title'> Delivery Info</p>
<div className='fields'>

  <input type='text' placeholder='First name'/>
  <input type='text' placeholder='Last name'/>

</div>


<input type='email' placeholder='Email address'/>
  <input type='text' placeholder='Street'/>

  <input type='text' placeholder='City'/>
<input type='text' placeholder='State'/>

<input type='text' placeholder='Zid code '/>
<input type='text' placeholder='Country'/>
<input type='text' placeholder='phone'/>

</div>


<div className='right-order'>

<div className="total-cart">
          <h2>Cart Totals</h2>
          <div>
            <div className="total-details">
              <p>SubTotal</p>
              <p>${totalAmount()}</p>
            </div>
            <div className="total-details">
              <p>Delivery Fees</p>
              <p>${totalAmount()===0?0:5}</p>
            </div>
            <div className="total-details">
              <b>Total</b>
              <b> ${totalAmount()===0?0: totalAmount()+5}</b>
            </div>
          </div>
          <button >PROCEED TO PAYMENT</button>
        </div>

</div>
    </form>
  )
}

export default Order
