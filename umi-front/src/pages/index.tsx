import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import '../layouts/index.less';

export default function HomePage() {
  return (
    <Container>
      <Row className={"justify-content-md-center mt-5"}>
        <h1>All the Chinese Homestyle Taste</h1>
      </Row>

      <Row className={"justify-content-md-center mt-3"}>
        <Col>
          {/* <h2> 1</h2> */}
          <p>It all began in Room 266 Baker Systems Building when four students started a tiny web-based online vatering services aiming to provide the ost authentic taste of CHinese cuisine.</p>

          <p>Three months later, the Dragon's Wok finally starts its services for every Chinese student in Columbus to have the taste from home once again</p>

          <p>We have also expanded our services to all Chinese cuisine lovers, whether you are authentic or American-style Chinese cuisine lover!</p>
        </Col>
      </Row>

      <Row className={"justify-content-md-center mt-3"}>
        <Col>
          <h2>Easy and Quick Ordering</h2>
          Online ordering, catering, and everything else with a few clicks. Should you have any special requirements or customization, feel free to leave a call on us!
        </Col>
      </Row>

      <Row className={"justify-content-md-center mt-3"}>
        <Col>
          <h2>Quality is Our Recipe</h2>
          All the ingredients of our foods are selected with highest quality and meets the FDA and USDA standard to provide the best food to all of our customers!
        </Col>
      </Row>
    </Container>
  );
}
