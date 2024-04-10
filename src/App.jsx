import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Home from '../src/pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Order from './pages/Order/Order';
import {Routes,Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <>
<div className='app'>
      <Navbar/>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/cart' element={<Cart/>}/>
        <Route path = '/order' element={<Order/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  
  )
}

export default App
