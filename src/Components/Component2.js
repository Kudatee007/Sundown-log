import React from 'react'
import './Component2.css'
import airport from '../img/airport.jpeg'
import business from "../img/Business.jpg"
import hourly from "../img/hourly as directed.jpg"
import wedding from "../img/weddings.webp"
import party from "../img/party.jpg"
import executive from "../img/executive.webp"

const Component2 = () => {
    return (
        <div className='div22'>
            <div className='div2'>
                <h1 className='h22'>The Ultimate Luxury Limousine Service</h1>
                <p className='p22'>
                    we aim to provide our customers with fast and peaceful access to affordable luxury Limousine Service. We are well-known for our professionalism and high standard of service our customers expect when riding in a chauffeured vehicle. We encourage you to read the details below to expolre our services.
                </p>
            </div>
            <div className='grid_div'>
                <div className='grid1'>
                    <img className='img1' src={airport} alt="" />
                    <h5 className='h55'>Airport Transportation</h5>
                </div>
                <div>
                    <img className='img1' src={business} alt="" />
                    <h5 className='h55'>Business Travel</h5>
                </div>
                <div>
                    <img className='img1' src={hourly} alt="" />
                    <h5 className='h55'>Hourly As Directed</h5>
                </div>
                <div>
                    <img className='img1' src={wedding} alt="" />
                    <h5 className='h55'>Weddings</h5>
                </div>
                <div>
                    <img className='img1' src={party} alt="" />
                    <h5 className='h55'>Party</h5>
                </div>
                <div>
                    <img className='img1' src={executive} alt="" />
                    <h5 className='h55'>Executive</h5>
                </div>
            </div>
        </div>
    )
}

export default Component2