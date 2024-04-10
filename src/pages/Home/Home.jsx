import React, { useState } from 'react'
import './Home.css';
import Header from '../../components/Navbar/Header/Header';
import Menu from '../../components/Navbar/Menu/Menu';
import Food from '../../components/Navbar/Food/Food';
import AppDownload from '../../components/AppDownload/AppDownload';
const Home = () => {

const [category,setCategory] = useState('All');

  return (
    <div>
      <Header/>
      <Menu category={category} setCategory = {setCategory}/>
      <Food category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
