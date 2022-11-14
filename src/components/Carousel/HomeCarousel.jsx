import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img from "../../assets/cyberpunk.jpg"
import img2 from "../../assets/COD.jpg"
import img3 from "../../assets/creed.jpg"
import img4 from "../../assets/gta5.jpg"


const HomeCarousel = () => {

  return (
    <div className='container'>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img4}
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>

  );
}

export default HomeCarousel;