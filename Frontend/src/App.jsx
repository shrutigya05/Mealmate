import React,{useState} from 'react'
import {Routes ,Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'

import Home from './Pages/Home/Home'
import './index.css'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'
import Cart from './Pages/Cart/Cart'
import Placeholder from './Pages/Placeholder/Placeholder'
import MyOrders from './Pages/MyOrders/MyOrders'
import Verify from './Pages/Verify/Verify'
const App = () => {
  const [showLogin,setShowLogin] =useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} /> :<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
    <Routes>
      <Route path='/' element={<Home />} />
       <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<Placeholder />} /> 
        <Route path='/verify' element={<Verify />} />
        <Route path='/myorders' element={<MyOrders />} />
    </Routes>
    
   </div>
  
    <Footer />
    
     </>
  )
}

export default App