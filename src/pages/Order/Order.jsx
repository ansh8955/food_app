import React, { useContext } from "react";
import "./Order.css";
import { StoreContext } from "../../Context/StoreContext";

const Order = () => {
  const { totalAmount } = useContext(StoreContext);

  const openPaymentDialog = async (e) => {

    e.preventDefault();
    const options = {
      key: "rzp_test_WNVM9LqgCjeGM7", // Replace with your actual key
      key_secret:"bOkw6JNvYgC7ms1icHTTbdQq",
      amount: totalAmount()*100 + 500, // Amount is in paisa (100th of currency unit)
      currency: "INR",
      name: "Your Company Name",
      description: "Test payment",
      image: "https://yourcompany.com/logo.png",
      handler: function (response) {
        console.log(response);
        alert(response.razorpay_payment_id);
        // You can add additional logic here such as updating your database
        // Update state to reflect payment completion
      },
      prefill: {
        name: "John Doe",
        email: "john.doe@example.com",
        contact: "+919876543210",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#F37254",
      },
    };

    try {
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error in creating Razorpay instance:", error);
    }
  };

  return (
    <form className="order" onSubmit={openPaymentDialog}>
      <div className="left-order">
        <p className="title"> Delivery Info</p>
        <div className="fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>

        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />

        <input type="text" placeholder="City" />
        <input type="text" placeholder="State" />

        <input type="text" placeholder="Zip code" />
        <input type="text" placeholder="Country" />
        <input type="text" placeholder="Phone" />
      </div>

      <div className="right-order">
        <div className="total-cart">
          <h2>Cart Totals</h2>
          <div>
            <div className="total-details">
              <p>SubTotal</p>
              <p>${totalAmount()}</p>
            </div>
            <div className="total-details">
              <p>Delivery Fees</p>
              <p>${totalAmount() === 0 ? 0 : 5}</p>
            </div>
            <div className="total-details">
              <b>Total</b>
              <b> ${totalAmount() === 0 ? 0 : totalAmount() + 5}</b>
            </div>
          </div>
          <button >PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default Order;
