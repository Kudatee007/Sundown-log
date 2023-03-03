import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Booking.css";

const Booking = () => {
  useEffect(()=>{
    window.scrollTo(0, 0)
  })
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7mgroal",
        "template_agumg9q",
        form.current,
        "0l_7Ii5swDRXaZUNu"
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
    <div className="Booking">
      <div>
        <h1 className="contactInfo">Contact Information</h1>
      </div>
      <div>
      <form ref={form} onSubmit={sendEmail}>
          <div className="labInput">
            <label htmlFor="user_name">
              Full Name<span className="spans">*</span>
            </label>
            <input
              type="text"
              name="user_name"
              className="fullName"
            />
          </div>
          <div className="labInput">
            <label htmlFor="user_phone">
              Phone Number<span className="spans">*</span>
            </label>
            <input
              type="phone"
              name="user_phone"
              className="userPhone"
            />
          </div>
          <div className="labInput">
            <label htmlFor="user_email">
              Email<span className="spans">*</span>
            </label>
            <input
              type="email"
              name="user_email"
              className="userEmail"
            />
          </div>
          <h1 className="contactInfo">Transportation Service Information</h1>
          <div className="labInput">
            <label htmlFor="user_services">
              Type of Service<span className="spans">*</span>
            </label>
            <input
              type="email"
              name="user_services"
              className="userServices"
            />
          </div>
          <div className="labInput">
            <label htmlFor="user_vehicles">
              Type of Vehicle<span className="spans">*</span>
            </label>
            <input
              type="email"
              name="user_vehicles"
              className="userVehicles"
            />
          </div>
          <div className="labInput">
            <label htmlFor="user_hours">
              Total Hours<span className="spans">*</span>
            </label>
            <input
              type="text"
              name="user_hours"
              className="userHour"
            />
          </div>

          <h1 className="contactInfo">Pick-Up Information</h1>
          <div className="labInput">
            <label htmlFor="user_address">
              Address<span className="spans">*</span>
            </label>
            <input
              type="text"
              name="user_address"
              className="userAddress"
            />
          </div>
          <div className="labInput">
            <label htmlFor="user_city">
              City<span className="spans">*</span>
            </label>
            <input
              type="text"
              name="user_city"
              className="userCity"
            />
            </div>
          <div className="labInput">
            <label htmlFor="user_state">
              State<span className="spans">*</span>
            </label>
            <input
              type="email"
              name="user_state"
              className="userState"
            />
          </div>
          <div className="labInput">
            <label htmlFor="user_passengers">
              Number of Passengers<span className="spans">*</span>
            </label>
            <input
              type="text"
              name="user_passengers"
              className="userPass"
            />
          </div>
          <div className="labInput">
            <label htmlFor="user_date">
              Date<span className="spans">*</span>
            </label>
            <input
              type="date"
              name="user_date"
              className="userDate"
            />
          </div>
          <div className="labInput">
            <label htmlFor="user_time">
              Time<span className="spans">*</span>
            </label>
            <input
              type="time"
              name="user_time"
              className="userTime"
            />
          </div>

          <h1 className="contactInfo">Drop-off Information</h1>
          <div className="labInput">
            <label htmlFor="user_address1">
              Address<span className="spans">*</span>
            </label>
            <input
              type="text"
              name="user_address1"
              className="userAddress"
            />
          </div>
          <div className="labInput">
            <label htmlFor="user_city1">
              City<span className="spans">*</span>
            </label>
            <input
              type="text"
              name="user_city1"
              className="userCity"
            />
          </div>
          <div className="labInput">
            <label htmlFor="user_state1">
              State<span className="spans">*</span>
            </label>
            <input
              type="email"
              name="user_state1"
              className="userState"
            />
          </div>
          <div>
            <h3 className="condition">Terms & Conditions</h3>
            <div className="checkBox">
              <input type="checkbox" name="condition" required/>
              <p>I agree to terms & conditions</p>
            </div>
            <button className="btnBooks" type="submit" value="Send">
              {/* <img src={Arrow} alt="" /> */}
              Submit Reservation!
            </button>
          </div>
      </form>
        </div>
    </div>
  );
};

export default Booking;
