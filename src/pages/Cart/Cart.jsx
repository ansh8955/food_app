import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { food_list } from "../../assets/assets";
import {useNavigate} from 'react-router-dom';

const Cart = () => {
  const { cartItems,removeFromCart,totalAmount } = useContext(StoreContext);


  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cartitems">
        <div className="cartTitles">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cartTitles cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>

      <div className="bottom-cart">
        <div className="total-cart">
          <h2>Cart Totals</h2>
          <div>
            <div className="total-details">
              <p>SubTotal</p>
              <p>₹{totalAmount()}</p>
            </div>
            <div className="total-details">
              <p>Delivery Fees</p>
              <p>₹{totalAmount()===0?0:5}</p>
            </div>
            <div className="total-details">
              <b>Total</b>
              <b> ₹{totalAmount()===0?0: totalAmount() + 5}</b>
            </div>
          </div>
          <button onClick={()=>navigate('./order')}>PROCEED TO CHECKOUT</button>
        </div>

        <div className="cart-promo">
          <div>
            <p>If you have a promo code,Enter it here</p>
            <div className="cart-promo-input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
