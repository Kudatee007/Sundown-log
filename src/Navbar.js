import React, { useState } from "react";
import logo from "./img/BENTRACO (13) 1.svg";
import "./Navbar.css";
import hamburger from "./img/tabler_menu-2.svg";
import { Link } from "react-router-dom";
import cancel from './img/iconoir_cancel.svg'

const Navbar = () => {
  const [expand, setExpand] = useState(true);

  function handler() {
    setExpand(!expand);
  }
  return (
    <div className="Navbar">
      <div className="navBar">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div className={expand ? "navs" : "navs navs-NX"}>
          <a href="/" className="link" onClick={handler}><h1>Home</h1></a>
          <a href="/services" className="link" onClick={handler}><h1>Services</h1></a>
          <a href="/contact" className="link" onClick={handler}><h1>Contact Us</h1></a>
          <a href="/about" className="link" onClick={handler}><h1>About Us</h1></a>
          <a href="/booking" className="link" onClick={handler}><button className="btnBook">Booking</button></a>
        
        <img src={cancel} alt="" id="cancel" onClick={handler}/>
        </div>
        <div className="hamburger">
          <img src={hamburger} alt="" className="ham" onClick={handler} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
