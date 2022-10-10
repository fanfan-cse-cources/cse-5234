import React from "react"
import {Card, Col, Container, Row} from "react-bootstrap";
import productDetail from "@/pages/data/productDetail.json";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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

      <div className="m-test-wrap mt-3">
        <Row md={3} className="g-2">
          {productDetail.map((_, index) => {
            return (
              <Col key={index}>
                <Card>
                  <Card.Img variant="top" src="#" />
                  <Card.Body>
                    <Card.Title>{productDetail[index].name}</Card.Title>
                    <Card.Text>
                      {productDetail[index].desc}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">{"$" + productDetail[index].price}</small>
                  </Card.Footer>
                </Card>
              </Col>
            )
          })}
        </Row>
      </div>
    </Container>
  );
}
