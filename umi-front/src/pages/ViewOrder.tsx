import {faker} from "@faker-js/faker";
import {Col, Container, Row} from "react-bootstrap";

const generateAllOrders = () => {
  return (
    <div>
      <h2>Order #{faker.random.numeric()}</h2>
      {/*{generateTable()}*/}
    </div>
  )
}

export default function ViewOrder() {
  return (
    <Container>
      <Row className={"justify-content-md-center mt-5"}>
        <Col lg="1"></Col>
        <Col lg="10">
          <h1>View Order</h1>
        </Col>
        <Col lg="1"></Col>
      </Row>

      <Row className={"justify-content-md-center mt-3"}>
        <Col lg="1"></Col>
        <Col lg="10">
          {generateAllOrders()}
        </Col>
        <Col lg="1"></Col>
      </Row>
    </Container>
  );
}
  