import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
      
        <div className='header-contents'>
        <h2>Delicious Meals <br/> <span className='spann'>Delivered </span> to Your Door</h2>
         <a href='#explore-menu'><button>View Menu</button></a>
         
        </div>
    </div>
  )
}

export default Header