import React, { useState } from 'react'
import './Home.css'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import Header from '../../Components/Header/Header'
import Fooddisplay from '../../Components/Fooddisplay/Fooddisplay';
import AppDownload from '../../Components/AppDownload/AppDownload';
const Home = () => {
    const[category,setCategory]=useState("All");
  return (
    <div>
        <Header />
        <ExploreMenu  category={category} setCategory={setCategory} />
         <Fooddisplay category={category}/> 
         <AppDownload />
    </div>
  )
}

export default Home