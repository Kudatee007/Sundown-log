import React from 'react'
import './Component41.css'
import Carousel from 'react-bootstrap/Carousel';
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

const Component41 = () => {
  return (
    <div className='div41'>
        <h1 className='h22'>Our FLeet</h1>
           <Carousel className='carol'>
      <Carousel.Item>
        <img
          className="img7"
          src={benz}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Mercedes Benz S550</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='img7' src={limo1} alt="Second slide" />

        <Carousel.Caption>
          <h3>Stretch Limo</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img className='img7' src={mkt} alt="Third slide" />

        <Carousel.Caption>
          <h3>Mkt</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img className='img7' src={escalade} alt="Third slide" />

        <Carousel.Caption>
          <h3>Escalade</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img className='img7' src={cadi} alt="Third slide" />

        <Carousel.Caption>
          <h3>Cadillac</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img className='img7' src={chevrolet} alt="Third slide" />

        <Carousel.Caption>
          <h3>Chevrolet</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img className='img7' src={ford} alt="Third slide" />

        <Carousel.Caption>
          <h3>Ford</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img className='img7' src={partyv} alt="Third slide" />

        <Carousel.Caption>
          <h3>Party Van</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img className='img7' src={sprinter} alt="Third slide" />

        <Carousel.Caption>
          <h3>Sprinter Van</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img className='img7' src={delivery} alt="Third slide" />

        <Carousel.Caption>
          <h3>Delivery Van</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img className='img7' src={vip} alt="Third slide" />

        <Carousel.Caption>
          <h3>Shuttle Bus</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img className='img7' src={dryv} alt="Third slide" />

        <Carousel.Caption>
          <h3>Dry Van</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Component41