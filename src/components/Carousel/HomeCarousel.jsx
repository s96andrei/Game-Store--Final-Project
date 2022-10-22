import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img from "../../assets/gta5.jpg"
import img2 from "../../assets/pubg.jpg"
import img3 from "../../assets/COD.jpg"

const HomeCarousel = () => {

  return (

    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;