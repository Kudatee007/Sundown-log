import React from 'react'
import './Services.css'
import airport from '../img/airport.jpeg'
import wedding from '../img/weddings.webp'
import business from '../img/Business.jpg'
import hourly from '../img/hourly as directed.jpg'
import party from '../img/party.jpg'
import flatbed from '../img/flatbed.jpg'
import delivery from '../img/delivery van.webp'

const Services = () => {
  return (
    <div className='service'>
      <div className='flex6'>
        <div>
          <img className='img6' src={airport} alt="" />
        </div>
        <div>
          <h2>AIRPORT TRANSPORTATION</h2>
          <p className='p6'>
            Imagine a limo ride to the airport when you are ready to leave. A courteous chauffeur loads your luggage and gives you a perfect ride, which we call an ideal luxury.Therefore, Bentraco Logistics offers airport chauffeur service that provides safety and sophistication all through. We have the widest variety of luxury airport car services which you can book and have an easy ride to and from the airport to your desired destination. Looking for an airport limousine service near me, then you're in the right place. you are traveling with your family or on a business tour, we will ensure you sit ba relax, enjoy and let us do the driving.
          </p>
        </div>
      </div>
      <div className='flex6'>
        <div>
          <img className='img6' src={business} alt="" />
        </div>
        <div>
          <h2>BUSINESS TRAVEL</h2>
          <p className='p6'>
            Making progress in the market, deluxe limousine services are business needs of professionals. In this advanced world, people one place for business purposes, so it can be tough to keep trac cars for transportation. People in business have to travel to attend all kinds of corporate and events. BENTRACO LOGISTICS understands how important it is to manage their transportation, therefore we offer Bentraco logistics service to them. We offer these limo services so that business people can make a first impression on others that counts.
          </p>
        </div>
      </div>
      <div className='flex6'>
        <div>
          <img className='img6' src={hourly} alt="" />
        </div>
        <div>
          <h2>HOURLY AS DESIRED</h2>
          <p className='p6'>
            If you need a driver to stay with you all day, then Hourly Limousine is the solution Bentraco logistics gives you the freedom to choose how long you want to have the transport service. Our friendly drivers are ready to take you towards your desired destination. provide our clients with a high-quality standard and assure them they will arrive at their destination promptly. Our hourly rate limousine service is perfect for the specific requirements customers. Our drivers will arrive on time and make you reach your destine time to spare.
          </p>
        </div>
      </div>
      <div className='flex6'>
        <div>
          <img className='img6' src={wedding} alt="" />
        </div>
        <div>
          <h2>WEDDINGS</h2>
          <p className='p6'>
            Your big day is here, and all is set for your wedding, so now it is time to look for a classic wedding cars limousine service. BENTRACO Limo provides you with special touches that make your wedding more memorable and extraordinary.Our professional staff makes sure that no detail is overlooked so that you can experience a luxurious wedding. You can choose any luxury vehicle of your choice, and you will get the same services in them. We are committed to making your big day worry-free and unforgettable. Therefore, we offer you a safe ride with our perfect operating vehicles. Hence, choose a wedding limo for a sophisticated experience.
          </p>
        </div>
      </div>
      <div className='flex6'>
        <div>
          <img className='img6' src={party} alt="" />
        </div>
        <div>
          <h2>PARTY</h2>
          <p className='p6'>
            Bentraco Luxury Party Van provide you with the opportunity to transport a large group and have a huge amount of fun at the same time. Forget taxis, ubers, buses or long walks, party vans make every aspect of the night a party whether you're in a busy city like Bristol or a small town like Radyr.
          </p>
        </div>
      </div>
      <div className='flex6'>
        <div>
          <img className='img6' src={flatbed} alt="" />
        </div>
        <div>
          <h2>FLATBED</h2>
          <p className='p6'>
            BENTRACO LOGISTICS flatbed service provides solutions for standard and specialized equipment that can be difficult to locate. Flatbed offers capacity for pop-up, surge, over-dimensional, and dedicated services, regardless of industry. Trailer capacity varies by type. Whether you need a dedicated flatbed company, local flatbed delivery, regional flatbed services, or even a long haul trucking service. BENTRACO LOGISTICS will get your freight loaded on time and on the road. We provide solutions for standard and specialized equipment and freight that can be difficult to locate.
          </p>
        </div>
      </div>
      <div className='flex6'>
        <div>
          <img className='img6' src={delivery} alt="" />
        </div>
        <div>
          <h2>DELIVERY</h2>
          <p className='p6'>
            BENTRACO LOGISTICS  offers Delivery Van services for larger items and small freight delivery needs. If your shipments are larger in size but require expedited or time specific delivery, Reliable Delivery has an option to fit your need!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services