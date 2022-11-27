import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import {Col, Container, Row} from "react-bootstrap";
import {history, useLocation} from "umi"
import {generateTable} from './util/GenerateOrderDetails';
import {OrderDetail} from "@/models/OrderDetail";
import {useEffect, useState} from "react";
import '../layouts/index.less';


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
        <h1>Confirmation</h1>
      </Row>

      <Row className={"justify-content-md-center mt-3"}>
        <Alert variant='success'>
          Your order #{order.order_id} has been confirmed, {address.name}.
        </Alert>
        <Alert variant='info'>
          Current Status: {order.status.toUpperCase()}
        </Alert>
      </Row>

      {<Row className={"justify-content-md-center mt-3"}>
        <h2>Your Orders</h2>
        {generateTable(line_items)}
      </Row>}

      <Row className={"justify-content-md-center mt-3"}>
        <Col lg={6}>
          <h2>Delivery</h2>
          <ul className={"conf"}>
            <li>{address.name}</li>
            <li>{address.addr_1}</li>
            <li>{address.addr_2}</li>
            <li>{address.city}, {address.state} {address.zip}</li>
          </ul>
        </Col>

        <Col lg={6}>
          <h2>Payment</h2>
          <ul className={"conf"}>
            <li>Confirmation: {card.confirmation}</li>
            <li>{card.name}</li>
            <li>{card.card_last_four}</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
