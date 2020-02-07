import React from 'react';
import Carousel from "react-bootstrap/Carousel";

const styles = require('./Styling.css');

export default function HomePage() {
  return(
      <Carousel>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="carousel1.jpg"
            alt="Беседка"
          />
          <Carousel.Caption>
            <h3>Беседка</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="carousel2.jpg"
            alt="Стрелка"
          />
          <Carousel.Caption>
            <h3>Стрелка</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="carousel3.jpg"
            alt="Кремль"
          />
          <Carousel.Caption>
            <h3>Кремль</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  );

}
