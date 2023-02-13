import React from 'react'
import './Component3.css'
import dry from '../img/dry van.jpg'
import flatbed from '../img/flatbed.jpg'
import van from '../img/van.jpg'

const Component3 = () => {
    return (
        <div>
            <div>
                <h1 className='h22'>Trucking and Logistics Services</h1>
                <p className='p22'>
                    Logistics is the process of moving goods from one location to another, either in bulk or in small packages. It is one of the most important areas of a trucking company and if it is done improperly, it can have a big impact on the company as a whole.
                </p>
            </div>
            <div className='grid_div1'>
                <div>
                    <img className='img1' src={dry} alt="" />
                    <h5 className='h55'>Dry Van</h5>
                </div>
                <div>
                    <img className='img1' src={flatbed} alt="" />
                    <h5 className='h55'>Flatbed</h5>
                </div>
                <div>
                    <img className='img1' src={van} alt="" />
                    <h5 className='h55'>Van</h5>
                </div>
            </div>
        </div>
    )
}

export default Component3