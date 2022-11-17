import {useEffect, useState} from "react";
import {Button, Col, Container, Form, Row, Table} from "react-bootstrap";
import {history} from 'umi';
import {Item} from "@/models/Item";
import '../layouts/index.less';


export default function Purchase() {
  let items: Item[] = [];
  const [productDetail, setName] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/inventory-management/inventory/')
      .then((response) => response.json())
      .then((items) => setName(items));
  }, []);

  const onSubmit = () => {
    setButtonDisabled(true);
    history.push('/purchase/confirmOrder', {state: items})
  }

  return (
    <Container>
      <Row className={"justify-content-md-center mt-5"}>
        <h1>Select Your Order</h1>
      </Row>

      <Row className={"justify-content-md-center mt-3"}>
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
            {productDetail.map((_, index) => {
              return (
                <tbody key={index}>
                <tr>
                  <td>{productDetail[index]['name']}</td>
                  <td>{productDetail[index]['description']}</td>
                  <td>{"$" + productDetail[index]['price']}</td>
                  <td>
                    <select name={"item_" + index} className={"form-control"} form="my_form" onChange={(e) => {
                      items.push({
                        item_id: productDetail[index]['item_id'],
                        name: productDetail[index]['name'],
                        price: productDetail[index]['price'],
                        quantity: Number(e.target.value)
                      })
                    }}>
                      <option>0</option>
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
            })}
          </Table>
        </Form>
      </Row>
      <Row>
        <Col className={"d-grid gap-2"}>
          <Button variant="primary" onClick={onSubmit} disabled={buttonDisabled}>
            Confirm Order
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
  