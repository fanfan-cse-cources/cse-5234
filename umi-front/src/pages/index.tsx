import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import '../layouts/index.less';

export default function HomePage() {
  return (
    <Container>
      <Row className={"justify-content-md-center mt-5"}>
        <h1>About</h1>
      </Row>

      <Row className={"justify-content-md-center mt-3"}>
        <Col>
          <h2>Title 1</h2>
        </Col>
      </Row>

      <Row className={"justify-content-md-center mt-3"}>
        <Col>
          <h2>Title 2</h2>
        </Col>
      </Row>

      <Row className={"justify-content-md-center mt-3"}>
        <Col>
          <h3>Title 2</h3>
        </Col>
      </Row>
    </Container>
  );
}
