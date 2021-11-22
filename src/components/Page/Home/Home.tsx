import  { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CarouselBody } from "./Carousel/Carousel";
import { LeftBar } from "./LeftBar/LeftBar";
import { Top } from "./Top";
export const Home = () => {
  const [activeUser, setActiveUser] = useState<string>("roubert@bk.ru");

  return (
    <>
      <Container>
        <Row className={"b"}>
          <Col xs={12}>
            <CarouselBody />
          </Col>
        </Row>
        <Row className={"mainMenu"}>
          <Col xs={2}>
            <LeftBar setActiveUser={setActiveUser} />
          </Col>
          <Col className={"mainMenuCard"} xs={10}>
            <Top activeUser={activeUser} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
