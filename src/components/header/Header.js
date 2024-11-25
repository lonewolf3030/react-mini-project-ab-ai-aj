import React from 'react';
import "./header.css"
import { IoSearchSharp } from "react-icons/io5";

const Header = (props) => {

  return (
    <div className='nav'>
      <img width={100}
       src = "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" alt = "logo"/>

      <div className='search-bar'>
        <div>
        <IoSearchSharp  className='icon'/>
        </div>
        <input onChange={props.handleSearchChange}
         type = "text" placeholder='search items'/>
      </div>

      <ul className='menu-items'>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </div>
  )
}

export default Header