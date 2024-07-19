import React, { useState } from 'react'
import './Home.css';
import Header from '../../components/Navbar/Header/Header';
import Menu from '../../components/Navbar/Menu/Menu';
import Food from '../../components/Navbar/Food/Food';
import AppDownload from '../../components/AppDownload/AppDownload';
import { useEffect } from 'react';
import { StoreContext } from "../../Context/StoreContext";
import { useContext } from "react";
import { useAuth } from "../../Context/AuthContext";

const Home = () => {

const [category,setCategory] = useState('All');
// const {setUserUid,userUid} = useAuth();
const { currentUser, setLogin } = useAuth();

const {setUserUid,userUid} = useContext(StoreContext);

setUserUid(currentUser?.uid);

  return (
    <div>
  {console.log("userUid"+ userUid,"current user" +currentUser?.uid)};
      <Header/>
      <Menu category={category} setCategory = {setCategory}/>
      <Food category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
