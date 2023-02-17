import React from 'react'
import './Component4.css'
import secured from '../img/verified.png'
import car from '../img/electric-car.png'
import cost from '../img/cost.png'
import limo1 from '../img/limo stretch.jpg'
import benz from '../img/benz.jpg'
import mkt from '../img/mkt.png'
import escalade from '../img/Escalade limo.jpg'
import cadi from '../img/cadillac.webp'
import chevrolet from '../img/chevrolet.jpg'
import ford from '../img/ford.jpg'
import partyv from '../img/partyyy.jpg'
import sprinter from '../img/sprinter van.png'
import delivery from '../img/delivery van.webp'
import vip from '../img/vip.png'
import dryv from '../img/dry van 2.webp'

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
            <div>
                <h1 className='h22'>Our Fleet</h1>
            </div>
            <div className='grid_div11'>
                <div className='grid2'>
                    <img className='img3' src={limo1} alt="" />
                    <label htmlFor="">Limo </label>
                </div>
                <div className='grid2'>
                    <img className='img3' src={benz} alt="" />
                    <label htmlFor="">Benz S550 </label>
                </div>
                <div className='grid2'>
                    <img className='img3' src={mkt} alt="" />
                    <label htmlFor="">Lincoln</label>
                </div>
                <div className='grid2'>
                    <img className='img3' src={escalade} alt="" />
                    <label htmlFor="">Escalade</label>
                </div>
                <div className='grid2'>
                    <img className='img3' src={cadi} alt="" />
                    <label htmlFor="">Cardillac</label>
                </div>
                <div className='grid2'>
                    <img className='img3' src={ford} alt="" />
                    <label htmlFor="">Ford</label>
                </div>
                <div className='grid2'>
                    <img className='img3' src={chevrolet} alt="" />
                    <label htmlFor="">Chevrolet</label>
                </div>
                <div className='grid2'>
                    <img className='img3' src={partyv} alt="" />
                    <label htmlFor="">              Party Van  </label>
                </div>
                <div className='grid2'>
                    <img className='img3' src={sprinter} alt="" />
                    <label htmlFor="">Sprinter Van </label>
                </div>
                <div className='grid2'>
                    <img className='img3' src={delivery} alt="" />
                    <label htmlFor="">Delivery Van</label>
                </div>
                <div className='grid2'>
                    <img className='img3' src={vip} alt="" />
                    <label htmlFor="">Charter Bus </label>
                </div>
                <div className='grid2'>
                    <img className='img3' src={dryv} alt="" />
                    <label htmlFor=""><br /> Dry Van</label>
                </div>
            </div>
        </div>
    )
}

export default Component4