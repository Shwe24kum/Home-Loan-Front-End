import React from "react";
import { Carousel } from 'react-bootstrap';

import image1 from './../images/2.jpg';
import image2 from './../images/14.jpg';
import image3 from './../images/11.jpg';
import image4 from './../images/1.jpg';
import image5 from './../images/15.jpg';
import { Navigation } from "./Navigation";

export const Home = () => {
  return (
    <div className="backcolr">
    <Navigation/>
    <Carousel fade={true}>
      <Carousel.Item interval={1200} style={{'height':"300px"}}>
        <img
          className="d-block w-100 h-100"
          src={image1}
          alt="First slide "
        />
      </Carousel.Item>


      <Carousel.Item interval={1200} style={{'height':"300px"}}> 
        <img
          className="d-block w-100 h-100"
          src={image2}
          alt="Third slide"
        />
      </Carousel.Item>


      <Carousel.Item interval={1200} style={{'height':"300px"}}>
        <img
          className="d-block w-100 h-100"
          src={image3}
          alt="Third slide"
        />
      </Carousel.Item>


      <Carousel.Item interval={1200} style={{'height':"300px"}}>
        <img
          className="d-block w-100 h-100"
          src={image4}
          alt="Third slide "
        />
      </Carousel.Item>


      <Carousel.Item interval={1200} style={{'height':"300px"}}>
        <img
          className="d-block w-100 h-100"
          src={image5}
          alt="Third slide "
        />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
