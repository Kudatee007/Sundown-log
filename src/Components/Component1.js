import React from 'react'
import './Component.css'
import { Link } from "react-router-dom";

const Component1 = () => {
    return (
        <div className='div1'>
            <div className='div01'>
                <h1 className='h11'>Best American Luxury
                    Limousine and Trucking
                    Services</h1>
                <p className='p11'>Enjoy your ride with our affordable, reliable and convenient vehicles to chauffeur you to your next journey.
                    So, book your next Limo and Truck anywhere in the USA.</p>
                <div className='div02'>
                    <Link to="/booking">
                    <button className='btn1'>Make A Reservation</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Component1