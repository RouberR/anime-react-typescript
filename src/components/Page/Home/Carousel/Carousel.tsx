import React from "react";
import { Carousel } from "react-bootstrap";

export const CarouselBody = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://pm1.narvii.com/6573/5ff1f8787cbd2381576336124f09a4969a6093b4_hq.jpg"
          alt="First slide"
          height="350"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://99px.ru/sstorage/53/2020/11/tmb_317668_680625.jpg"
          alt="Second slide"
          height="350"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://avatanplus.com/files/resources/original/5895dcd67f5d715a0966a5fa.jpg"
          alt="Third slide"
          height="350"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
