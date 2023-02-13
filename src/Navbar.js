import React, { useState } from 'react'
import logo from './img/BENTRACO (13) 1.svg'
import './Navbar.css'
import hamburger from './img/tabler_menu-2.svg'

const Navbar = () => {
    const [expand, setExpand] = useState(true);

    function handler() {
        setExpand(!expand)
    }
  return (
    <div className='Navbar'>
        <div className='navBar'>
            <img src={logo} alt="" />
            <div className={expand ? "nav" : "nav nav-NX"}>
                <h1>Home</h1>
                <h1>Services</h1>
                <h1>Contact Us</h1>
                <h1>About Us</h1>
            <button className='btnBook'>Booking</button>
            </div>
            <div className='hamburger'>
        <img src={hamburger} alt="" className='ham' onClick={handler}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar