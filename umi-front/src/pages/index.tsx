import React from "react"
import {Col, Container, Row} from "react-bootstrap";

export default function HomePage() {
  return (
    <Container>
      <Row className={"justify-content-md-center mt-5"}>
        <Col lg="1"></Col>
        <Col lg="10">
          <h1>Welcome</h1>
        </Col>
        <Col lg="1"></Col>
      </Row>

      <Row className={"justify-content-md-center mt-3"}>
        <Col lg="1"></Col>
        <Col lg="10">

        </Col>
        <Col lg="1"></Col>
      </Row>
    </Container>
  );
}


