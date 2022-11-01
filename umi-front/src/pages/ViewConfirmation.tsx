import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import {Col, Container, Row} from "react-bootstrap";
import {useLocation} from "umi"


export default function ViewConfirmation() {

  const location = useLocation()
  const data = location.state
  console.log(data)
  const address = data.address
  const card = data.payment
  const order = data.order
  const info = {
    // order:order,
    order_id: order.order_id,
    name: address.name,
    // last_name: faker.name.lastName(),
    addr_1: address.addr_1,
    city: address.city,
    state: address.state,
    zip: address.zip,
    card_last_four: card.card_last_four,
    card_name: card.card_name,
    // order_id: faker.random.numeric(),
    // first_name: faker.name.firstName(),
    // last_name: faker.name.lastName(),
    // addr_1: faker.address.streetAddress(),
    // addr_2: faker.address.secondaryAddress(),
    // city: faker.address.cityName(),
    // state: faker.address.stateAbbr(),
    // zip: faker.address.zipCode(),
    // card_number: faker.finance.creditCardNumber().slice(-4),
    // card_issuer: faker.finance.creditCardIssuer(),
    // card_exp: "08/24"
  }
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
            Your order #{info.order_id} has been confirmed, {info.name}.
          </Alert>
        </Col>
        <Col lg="1"></Col>
      </Row>

      {/* <Row className={"justify-content-md-center mt-3"}>
        <Col lg="1"></Col>
        <Col lg="10">
          <h2>Your Orders</h2>
          {generateTable(info.order)}
        </Col>
        <Col lg="1"></Col>
      </Row> */}

      <Row className={"justify-content-md-center mt-3"}>
        <Col lg="1"></Col>
        <Col lg="5">
          <h2>Shipping Address</h2>
          <p>{info.name}</p>
          <p>{info.addr_1}</p>
          <p>{info.city}</p>
          <p>{info.state}</p>
          <p>{info.zip}</p>
        </Col>

        <Col lg="5">
          <h2>Payment Information</h2>
          <p>{info.card_name}</p>
          <p>{info.card_last_four}</p>
          {/* <p>{info.exp_year}</p>
          <p>{info.exp_month}</p> */}
        </Col>
        <Col lg="1"></Col>
      </Row>
    </Container>
  );
}
  