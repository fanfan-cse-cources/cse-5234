import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import {generateTable} from "./util/GenerateOrderDetails"
import {faker} from "@faker-js/faker";
import {Col, Container, Row} from "react-bootstrap";

const info = {
  order_id: faker.random.numeric(),
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  addr_1: faker.address.streetAddress(),
  addr_2: faker.address.secondaryAddress(),
  city: faker.address.cityName(),
  state: faker.address.stateAbbr(),
  zip: faker.address.zipCode(),
  card_number: faker.finance.creditCardNumber().slice(-4),
  card_issuer: faker.finance.creditCardIssuer(),
  card_exp: "08/24"
}

export default function ViewConfirmation() {
  return (
    <Container>
      <Row className={"justify-content-md-center mt-5"}>
        <Col lg="1"></Col>
        <Col lg="10">
          <h1>Confirmation</h1>
        </Col>
        <Col lg="1"></Col>
      </Row>

      <Row className={"justify-content-md-center mt-3"}>
        <Col lg="1"></Col>
        <Col lg="10">
          <Alert variant='success'>
            Your order #{info.order_id} has been confirmed, {info.first_name}.
          </Alert>
        </Col>
        <Col lg="1"></Col>
      </Row>

      <Row className={"justify-content-md-center mt-3"}>
        <Col lg="1"></Col>
        <Col lg="10">
          <h2>Your Orders</h2>
          {generateTable()}
        </Col>
        <Col lg="1"></Col>
      </Row>

      <Row className={"justify-content-md-center mt-3"}>
        <Col lg="1"></Col>
        <Col lg="5">
          <h2>Shipping Address</h2>
          <p>{info.first_name} {info.last_name}</p>
          <p>{info.addr_1}</p>
          <p>{info.addr_2}</p>
        </Col>

        <Col lg="5">
          <h2>Payment Information</h2>
          <p>{info.first_name} {info.last_name}</p>
          <p>{info.card_issuer.charAt(0).toUpperCase() + info.card_issuer.slice(1)} {info.card_number}</p>
          <p>{info.card_exp}</p>
        </Col>
        <Col lg="1"></Col>
      </Row>
    </Container>
  );
}
  