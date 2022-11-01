import {generateTable} from "./util/GenerateOrderDetails"
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import { history ,useParams, useLocation} from 'umi';
// import Form from "react-bootstrap/Form";

export default function ConfirmOrder() {
  function finishOrder(order,address,card){
    // const params=useParams()
  //   const location=useLocation()
  // console.log(location.state)
  //   alert(JSON.stringify(data))
    // history.push('/purchase/viewConfirmation');

    console.log(order)
    
    console.log(address)
    
    console.log(card)

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        line_items: order,
        addr_1:address.addr_1,
        city:address.city,
        state:address.state,
        zip:address.zip,
        number:card.number,
        exp_month:card.exp_month,
        exp_year:card.exp_year,
        cvv:card.cvv,
        card_name:card.card_name
       })
    };
    
    const response = fetch('http://localhost:3000/order/new',requestOptions)
    // .then(response=>history.push('/purchase/viewConfirmation', { state: response.json() }))
    .then(response=>console.log(response))
    
  }
  const location=useLocation()
  const orderdetail=location.state.state
  var addressdetail={name:"",addr_1:"", city:"",state:"",zip:""}
  var carddetail={number:"",exp_month:"",exp_year:"",card_name:"",cvv:999}
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
          {generateTable(orderdetail)}
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
              <Form.Control type="text" placeholder="John Doe" onChange={(e) =>{addressdetail.name=e.target.value}}/>
            </Form.Group>

            <Form.Group className={"mb-3"} controlId="addr_1"  onChange={(e) =>{addressdetail.addr_1=e.target.value}}>
              <Form.Label>Address 1</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>

            <Col lg="6">
              <Form.Group className={"mb-3"} controlId="city" onChange={(e) =>{addressdetail.city=e.target.value}}>
                <Form.Label>City</Form.Label>
                <Form.Control type="text"/>
              </Form.Group>
            </Col>
            <Col lg="6">
              <Form.Group className={"mb-3"} controlId="state" onChange={(e) =>{addressdetail.state=e.target.value}}>
                <Form.Label>State</Form.Label>
                <Form.Control type="text"/>
              </Form.Group>
            </Col>

            <Col lg="6">
              <Form.Group className={"mb-3"} controlId="zip" onChange={(e) =>{addressdetail.zip=e.target.value}}>
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
              <Form.Control type="text" placeholder="John Doe" onChange={(e) =>{carddetail.card_name=e.target.value}}/>
            </Form.Group>

            <Form.Group className={"mb-3"} controlId="cardnumber"  onChange={(e) =>{carddetail.number=e.target.value}}>
              <Form.Label>Card Number</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>

            <Col lg="6">
              <Form.Group className={"mb-3"} controlId="cvv" onChange={(e) =>{carddetail.cvv=e.target.value}}>
                <Form.Label>CVV</Form.Label>
                <Form.Control type="password"/>
              </Form.Group>
            </Col>

            <Col lg="6">

              <Form.Group className={"mb-3"} controlId="expdate" onChange={(e) =>{carddetail.exp_year=e.target.value.split("-")[0];carddetail.exp_month=e.target.value.split("-")[1]}}>
                <Form.Label>Exp Date</Form.Label>
                <Form.Control type="date" name='date_of_birth'  />

                {/* <Form.Control type="text"/> */}
                {/* <Form.Control type="date" name='date_of_birth' error={errors.date_of_birth} ref={register} /> */}

              </Form.Group>
            </Col>
          </Form>
        </Col>
        <Col lg="1"></Col>
      </Row>

      <Row>
        <Col lg="1"></Col>
        <Col lg="10" className={"d-grid gap-2"}>
          <Button variant="primary" onClick={(event)=>finishOrder(orderdetail,addressdetail,carddetail)}>
            Confirm Order
          </Button>
        </Col>
        <Col lg="1"></Col>
      </Row>
    </Container>
  );
}
  