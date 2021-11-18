import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CarouselBody } from "./Carousel/Carousel";
import { LeftBar } from "./LeftBar/LeftBar";
import { Top } from "./Top";
export const Home = () => {

  return (
    <>
      <Container>
        <Row>
          <Col><CarouselBody/></Col>
        </Row>
        <Row>
          <Col xs={2}><LeftBar/></Col>
          <Col xs={10}><Top/></Col>
        </Row>
      </Container>
    </>
  );
};
