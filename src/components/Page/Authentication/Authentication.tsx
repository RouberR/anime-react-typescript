import { Login } from "./Login";
import { Register } from "./Register";
import { Card } from "antd";
import { Col, Container, Row } from "react-bootstrap";
export const Authentication = () => {
  return (
    <Container className={"authentication"}>
      <Row>
        <Col xs={{ order: "first" }}>
          <Card title="Login" hoverable style={{ width: 500 }}>
            <Login />
          </Card>
        </Col>

        <Col xs={{ order: 12 }}>
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
