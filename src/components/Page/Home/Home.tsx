import React, {useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CarouselBody } from "./Carousel/Carousel";
import { LeftBar } from "./LeftBar/LeftBar";
import { Top } from "./Top";
export const Home = () => {
  const [activeUser, setActiveUser] = useState<string>("rouber@bk.ru");
  
  return (
    <>
      <Container>
        <Row>
          <Col><CarouselBody/></Col>
        </Row>
        <Row>
          <Col xs={2}><LeftBar setActiveUser={setActiveUser}/></Col>
          <Col xs={10}><Top activeUser={activeUser}/></Col>
        </Row>
      </Container>
    </>
  );
};
