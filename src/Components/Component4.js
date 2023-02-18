import React from 'react'
import './Component4.css'
import secured from '../img/verified.png'
import car from '../img/electric-car.png'
import cost from '../img/cost.png'



const Component4 = () => {
    return (
        <div>
            <div className='div4'>
                <h1 className='h22'>Why Choose Us?</h1>
                <p className='p22'>
                    We have professional and personalized transportation services to make your journey more than a destination. We also provide ridesthat are super safe, luxurious and prompt.
                </p>
            </div>
            <div className='flex_div'>
                <div className='flex'>
                    <img className='img2' src={secured} alt="" />
                    <p className='p4'>Our vehicle are maant to be the highest standard of safety. presentation and maintenance. </p>
                </div>
                <div className='flex'>
                    <img className='img2' src={car} alt="" />
                    <p className='p4'>
                        <span>BENTRACO LOGISTICS</span> provides high-quality private car services under the name of extravagance chauffeured car services.
                    </p>
                </div>
                <div className='flex'>
                    <img className='img2' src={cost} alt="" />
                    <p className='p4'>
                        We provide professional and affordable luxury limousine services. You can contact us to book your ride and our team will update you with your riding details.
                    </p>
                </div>
            </div>
          
        </div>
    )
}

export default Component4