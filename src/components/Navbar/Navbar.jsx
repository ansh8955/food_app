import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import {Link} from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({setLogin}) => {

  const open =()=>{


    <div>

<input type="text"/>
    </div>
   

  }

  const {totalAmount} = useContext(StoreContext);
  const [page, setPage] = useState("home");
  return (
    <div className="navbar">
      <Link to='/' className="logo">FOOD JUNCTION</Link>
    
      <ul className="navbar-list">
        <Link
          to="/"
          onClick={() => setPage("home")}
          className={page === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#menu"
          onClick={() => setPage("Menu")}
          className={page === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app"
          onClick={() => setPage("Mobile-app")}
          className={page === "Mobile-app" ? "active" : ""}
        >
          Mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setPage("Contact Us")}
          className={page === "Contact Us" ? "active" : ""}
        >
          Contact Us
        </a>
        

          <Link to='/Aboutus' onClick={() => setPage("Aboutus")}
          className={page === "Aboutus" ? "active" : ""}>
        
          About US
          </Link>
      </ul>

      
     
      <div className="nav-right">
        <img src={assets.search_icon} alt="search" onClick={()=>open()} ></img>

        <div className="search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt=""></img></Link>
          <div className={totalAmount() === 0 ?<></> : "dot"}></div>
        </div>
        <button onClick={()=>setLogin(true)} className="signin">Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
