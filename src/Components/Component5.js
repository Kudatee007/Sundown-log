import React from 'react'
import './Component5.css'
import mic from '../img/mic.jpeg'
import kate from '../img/kate.jpeg'

const Component5 = () => {
    return (
        <div className='main'>
            <div>
                <h1 className='h22'>Client's Testimonials</h1>
            </div>
            <div className='flex_div001'>
                <div className='fleex'>
                    <img className='img5' src={mic} alt="Mr & Mrs Micheal" />
                    <p className='p55'>Awesome experience! We decided to take a last minute trip to Beacon from NYC for a winery day trip. The driver called me immediately to set up our ride and accommodated all of our requests. The sprinter van was brand new + the driver was very professional. Will definitely be using BENTRACO LOGISTICS again!</p>
                    <h5>Mr & Mrs Micheal</h5>
                </div>
                <div className='fleex'>
                    <img className='img5' src={kate} alt="Mrs Kate" />
                    <p className='p55'>
                        Had a spectacular experience with BENTRACO limo service. I had to make a last minute reservation and they made the process seamless and very competitive. They were near 25% better than other companies. The black suburban we were picked up in was in perfect condition and our driver, Farouk was was a great communicator and was at the pick up spot within a minute of us waiting at the pick up area. Great service and will be using them again.
                    </p>
                    <h5>Mrs Kate</h5>
                </div>
            </div>
        </div>
    )
}

export default Component5