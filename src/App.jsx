import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Home from "../src/pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Order from "./pages/Order/Order";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Aboutus from "./pages/About US/Aboutus";

const App = () => {
  const [login, setLogin] = useState(false);

  return (
    <>
      {login ? <Login setLogin={setLogin} /> : null}
      <div className="app">
        <Navbar setLogin={setLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/order" element={<Order />} />
          <Route path="/Aboutus" element={<Aboutus />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
