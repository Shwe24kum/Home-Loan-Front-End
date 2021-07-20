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
    <div className="styleback">
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
    <br/>
    <div>
      <h3>Why Choose HOME LOAN</h3>
      <hr class="class-2" />
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus eget dolor ut venenatis. Sed condimentum scelerisque elit, nec condimentum mauris convallis dictum. Fusce fermentum diam sit amet bibendum fermentum. Phasellus tincidunt erat eget nibh pharetra elementum. Morbi quis tortor id ligula sollicitudin gravida. Aliquam ut sollicitudin ipsum. Aliquam id purus ipsum.
      </p>
    </div>
    <div class="container">
        <div class="row align-items-center my-5">
    <div class="col-lg-4">
      <h1>hii</h1>
    </div>
    <div class="col-lg-4">
    <h1>hii</h1>
    </div>
    <div class="col-lg-4">
    <h1>hii</h1>
    </div>
    </div>
    </div>
    </div>
  )
}
