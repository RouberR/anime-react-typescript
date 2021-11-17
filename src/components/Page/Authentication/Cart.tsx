import React from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import { Card } from "antd";
import { Col, Container, Row } from "react-bootstrap";
export const Cart = () => {
  return (
    <Container>
      <Row>
        <Col xs={{ order: "first" }}>
          <Card title="Login" hoverable style={{ width: 500 }}>
            <Login />
          </Card>
        </Col>

        <Col xs={{ order: 12 }}>
          {/* ?Вставить иконку либо картинку фоном?<img src="https://99px.ru/sstorage/53/2017/04/tmb_196164_6960.jpg"/> */}
        </Col>
        <Col xs={{ order: "last" }}>
          <Card title="Register" hoverable style={{ width: 500 }}>
            <Register />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
