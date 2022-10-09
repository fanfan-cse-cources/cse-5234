import {useState} from "react";
import {Button, Col, Container, Form, Row, Table} from "react-bootstrap";
import productDetail from "./data/productDetail.json"

export default function Purchase() {
  const [order, setOrder] = useState({
    quantity: Array.from(Array(productDetail.length).keys())
  })
  const onAdd = (e: number, i: number) => {
    alert("Adding " + e + " of product " + productDetail[i].name)
  }

  const generateRow = (i: number) => {
    return (
      <tbody>
      <tr>
        <td>{productDetail[i].name}</td>
        <td>{productDetail[i].desc}</td>
        <td>{"$" + productDetail[i].price}</td>
        <td>
          <select name={"item_" + i} className={"form-control"} form="my_form" onChange={(e) => {
            order.quantity[i] = Number(e.target.value)
          }}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </td>
      </tr>
      </tbody>
    )
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col lg="2"></Col>
        <Col lg="8">
          <h1>Select Your Order</h1>
        </Col>
        <Col lg="2"></Col>
      </Row>

      <Row>
        <Col lg="2"></Col>
        <Col lg="8">
          <Form method="GET" id="my_form">
            <Table>
              <thead>
              <tr>
                <th>Name</th>
                <th>Disc</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
              </thead>
              {generateRow(0)}
              {generateRow(1)}
              {generateRow(2)}
              {generateRow(3)}
              {generateRow(4)}
            </Table>
          </Form>
        </Col>
        <Col lg="2"></Col>
      </Row>
    </Container>
  );
}
  