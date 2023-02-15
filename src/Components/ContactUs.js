import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Arrow from "../img/Vector.svg";
import "./ContactUs.css";
import location from "../img/location.svg";
import phoneCall from "../img/phonecall.svg";
import mail from "../img/mail.svg";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_56v0gd9",
        "template_bhz5txr",
        form.current,
        "0UKUum03i5SkKtrwq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <div className="Footer">
        <div className="foot">
          <h1>G<span className="span">et</span> in touch</h1>
          <p>
            At USA Limo Service, we always strive to provide the best customer
            service possible. Our Customer Service Agents are always available
            to help with your reservations, and we are happy to assist with any
            special requests or requirements.
          </p>
          <p>I'll answer all inquiries as soon as humanly possible!</p>
          <h1>Bu<span className="span">si</span>ness Hours</h1>
          <p>Reservation and Dispatch 24/7</p>
          <h1>Billing <span className="span">De</span>partment</h1>
          <p>Monday - Friday - 9AM-5PM EST</p>
        </div>
        <div className="foot2">
          <h1 className="Cont">The o<span className="span">ff</span>ice</h1>
          <hr className="Line" />
          <div className="footBox">
            <img src={location} alt="" />
            <h5>Arlington, VA 22204</h5>
          </div>
          <div className="footBox">
            <img src={mail} alt="" />
            <h5>12345678910@gmail.com</h5>
          </div>
          <div className="footBox">
            <img src={phoneCall} alt="" />
            <h5>+123 45678910</h5>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="Input">
              <h2 className="inTouch">Lets get in touch.</h2>
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                className="inputName"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                className="inputEmail"
              />
              <textarea
                name="message"
                cols="30"
                rows="4"
                placeholder="Message"
                className="inputText"
              />
              <button className="Btnsend" type="submit" value="Send">
                <img src={Arrow} alt="" />
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
