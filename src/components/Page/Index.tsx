import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CarouselBody } from "../Body/Carousel/Carousel";
import { LeftBar } from "../Body/LeftBar/LeftBar";
import { Top } from "../Body/TopBar/Top";
export const Page = () => {
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
