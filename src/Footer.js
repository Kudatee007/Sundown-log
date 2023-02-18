import React from "react";
import "./Footer.css";
import location from "./img/location.svg";
import mail from "./img/mail.svg";
import phoneCall from "./img/phonecall.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="limoFooter">
        <div className="limo">
          <h1>BENTRACO Logistics LLC. is your source for transportation.</h1>
          <p>Ask About our Daily Specials for the DC area!</p>
        </div>
        <button className="btnBookNow">Book Now!</button>
      </div>

      <div className="linksFooter">
        <div className="Links">
          <ul className="uls">
            <li>
              <h1 className="quick">Quick Links</h1>
            </li>
           <Link to="/" className="link"> <li className="links">Home</li></Link>
            <Link to="/services" className="link"><li className="links">Services</li></Link>
            <Link to="/contact" className="link"><li className="links">Contact Us</li></Link>
            <Link to="/about" className="link"><li className="links">About Us</li></Link>
          </ul>
        </div>
        <div className="BOX">
          <h1 className="contactUs">Contact Us</h1>
          <div className="footbox">
            <img src={location} alt="" />
            <h5>2145 E West Connector Apt 202 Austell GA 30106-8191</h5>
          </div>
          <div className="footbox">
            <img src={mail} alt="" />
            <h5>12345678910@gmail.com</h5>
          </div>
          <div className="footbox">
            <img src={phoneCall} alt="" />
            <h5>+123 45678910</h5>
          </div>
        </div>
      </div>

      <div className="copyright">
        <h5>© Copyright 2017. BENTRACO Logistics LLC. All Rights Reserved. | By: <span>Sundown Tech Solutions</span></h5>
      </div>
    </div>
  );
};

export default Footer;
