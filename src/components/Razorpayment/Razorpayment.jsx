import React, { useEffect, useState } from "react";
import Razorpay from "razorpay";

const Razorpayment = () => {
  const [paymentMade, setPaymentMade] = useState(false);

  const openPaymentDialog = () => {
    const options = {
      key: "rzp_test_47OB4SGr8o5ZX6", // Replace with your actual key
      amount: 10000, // Example: 10000 means ₹100.00
      currency: "INR",
      name: "Your Company Name",
      description: "Test payment",
      image: "https://yourcompany.com/logo.png",
      handler: function (response) {
        alert(response.razorpay_payment_id);
        // You can add additional logic here such as updating your database
        setPaymentMade(true); // Update state to reflect payment completion
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
    const rzp = new Razorpay(options);
    rzp.open();
  };

  useEffect(() => {
    if (!paymentMade) {
      openPaymentDialog();
    }
  }, [paymentMade]);

  return (
    <div>
      <h2>Payment Gateway Integration</h2>
      {/* You can add more UI elements here */}
    </div>
  );
};

export default Razorpayment;
