import {generateTable} from "./util/GenerateOrderDetails"
import {Button, Col, Container, Form, Row} from "react-bootstrap";

export default function ConfirmOrder() {
  return (
    <Container>
      <Row className={"justify-content-md-center mt-5"}>
        <Col lg="1"></Col>
        <Col lg="10">
          <h1>Make Your Payment</h1>
        </Col>
        <Col lg="1"></Col>
      </Row>

      <Row className={"justify-content-md-center mt-3"}>
        <Col lg="1"></Col>
        <Col lg="10">
          <h2>Details</h2>
          {generateTable()}
        </Col>
        <Col lg="1"></Col>
      </Row>

      <Row className={"justify-content-md-center mt-3"}>
        <Col lg="1"></Col>
        <Col lg="5">
          <h2>Delivery</h2>
          <Form as={Row}>
            <Form.Group className={"mb-3"} controlId="recipient">
              <Form.Label>Recipient</Form.Label>
              <Form.Control type="text" placeholder="John Doe"/>
            </Form.Group>

            <Form.Group className={"mb-3"} controlId="addr_1">
              <Form.Label>Address 1</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>

            <Form.Group className={"mb-3"} controlId="addr_2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>

            <Col lg="6">
              <Form.Group className={"mb-3"} controlId="state">
                <Form.Label>State</Form.Label>
                <Form.Control type="text"/>
              </Form.Group>
            </Col>

            <Col lg="6">
              <Form.Group className={"mb-3"} controlId="zip">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control type="text"/>
              </Form.Group>
            </Col>
          </Form>
        </Col>

        <Col lg="5">
          <h2>Payment</h2>
          <Form as={Row}>
            <Form.Group className={"mb-3"} controlId="cardholder">
              <Form.Label>Name on Card</Form.Label>
              <Form.Control type="text" placeholder="John Doe"/>
            </Form.Group>

            <Form.Group className={"mb-3"} controlId="cardnumber">
              <Form.Label>Card Number</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>

            <Col lg="6">
              <Form.Group className={"mb-3"} controlId="cvv">
                <Form.Label>CVV</Form.Label>
                <Form.Control type="password"/>
              </Form.Group>
            </Col>

            <Col lg="6">
              <Form.Group className={"mb-3"} controlId="expdate">
                <Form.Label>Exp Date</Form.Label>
                <Form.Control type="text"/>
              </Form.Group>
            </Col>
          </Form>
        </Col>
        <Col lg="1"></Col>
      </Row>

      <Row>
        <Col lg="1"></Col>
        <Col lg="10" className={"d-grid gap-2"}>
          <Button variant="primary">
            Confirm Order
          </Button>
        </Col>
        <Col lg="1"></Col>
      </Row>
    </Container>
  );
}
  