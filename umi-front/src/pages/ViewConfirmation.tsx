import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import {Col, Container, Row} from "react-bootstrap";
import {history, useLocation} from "umi"

export interface orderDetail {
  address: { name: string; addr_1: string; addr_2: string; city: string; state: string; zip: string; },
  payment: { card_last_four: number, card_name: string },
  order: {
    order_id: number
  }
}

export default function ViewConfirmation() {
  const historyState = useLocation().state as { state: object };
  if (historyState.state === null || historyState.state === undefined) {
    return history.push("/purchase");
  }

  const data = historyState.state as orderDetail;
  console.log("fuck")
  console.log(data)
  const address = data.address
  const card = data.payment
  const order = data.order
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
          {/*{generateTable(info.order)}*/}
        </Col>
        <Col lg="1"></Col>
      </Row>}

      <Row className={"justify-content-md-center mt-3"}>
        <Col lg="1"></Col>
        <Col lg="5">
          <h2>Shipping Address</h2>
          <p>{address.name}</p>
          <p>{address.addr_1}</p>
          <p>{address.addr_2}</p>
          <p>{address.city}</p>
          <p>{address.state}</p>
          <p>{address.zip}</p>
        </Col>

        <Col lg="5">
          <h2>Payment Information</h2>
          <p>{card.card_name}</p>
          <p>{card.card_last_four}</p>
        </Col>
        <Col lg="1"></Col>
      </Row>
    </Container>
  );
}
