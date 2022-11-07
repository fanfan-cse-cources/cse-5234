import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import {Col, Container, Row} from "react-bootstrap";
import {history, useLocation} from "umi"
import {generateTable} from './util/GenerateOrderDetails';
import {OrderDetail} from "@/models/OrderDetail";
import {useEffect, useState} from "react";


export default function ViewConfirmation() {
  const historyState = useLocation().state as { state: object };
  if (historyState.state === null || historyState.state === undefined) {
    return history.push("/purchase");
  }

  const data = historyState.state as OrderDetail;
  const address = data.address
  const card = data.payment
  const order = data.order
  const line_items = JSON.parse(order.line_items)

  const [paymentConfirmation, setPaymentConfirmation] = useState([]);
  useEffect(() => {
    localStorage.setItem('paymentConfirmation', card.confirmation);
  }, [paymentConfirmation]);

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
            Your order #{order.order_id} has been confirmed, {address.name}.
          </Alert>
        </Col>
        <Col lg="1"></Col>
      </Row>

      {<Row className={"justify-content-md-center mt-3"}>
        <Col lg="1"></Col>
        <Col lg="10">
          <h2>Your Orders</h2>
          {generateTable(line_items)}
        </Col>
        <Col lg="1"></Col>
      </Row>}

      <Row className={"justify-content-md-center mt-3"}>
        <Col lg="1"></Col>
        <Col lg="5">
          <h2>Delivery</h2>
          <p>{address.name}</p>
          <p>{address.addr_1}</p>
          <p>{address.addr_2}</p>
          <p>{address.city}, {address.state} {address.zip}</p>
        </Col>

        <Col lg="5">
          <h2>Payment</h2>
          <p>Confirmation: {card.confirmation}</p>
          <p>{card.name}</p>
          <p>{card.card_last_four}</p>
        </Col>
        <Col lg="1"></Col>
      </Row>
    </Container>
  );
}
