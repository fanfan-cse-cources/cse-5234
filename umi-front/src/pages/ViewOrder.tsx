import {generateTable} from "@/pages/util/GenerateOrderDetails";
import {faker} from "@faker-js/faker";
import {Col, Container, Row} from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

const generateAllOrders = () => {
  return (
    <div>
      <h2>Order #{faker.random.numeric()}</h2>
      {generateTable()}
    </div>
  )
}

export default function ViewOrder() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col lg="2"></Col>
        <Col lg="8">
          <h1>View Order</h1>
        </Col>
        <Col lg="2"></Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col lg="2"></Col>
        <Col lg="8">
          {generateAllOrders()}
        </Col>
        <Col lg="2"></Col>
      </Row>
    </Container>
  );
}
  