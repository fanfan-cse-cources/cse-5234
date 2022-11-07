import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {generateTable} from "@/pages/util/GenerateOrderDetails";
import {OrderDetail} from "@/models/OrderDetail";
import {Item} from "@/models/Item";


export default class ViewOrder extends React.Component<{}, { orderId: number, items: Array<Item> }> {

  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      orderId: 0,
      items: new Array<Item>()
    };
    this.getCurrentOrder()
      .catch(e => {
        console.error(e);
      });
  }

  getCurrentOrder = async () => {
    const productDetail = await (await fetch('http://localhost:3000/inventory-management/inventory/')).json() as Array<Item>;
    const orderDetail = await (await fetch('http://localhost:3000/order-processing/order/view/3281c345-a3ed-45e4-b707-d97fc9adac2f')).json() as OrderDetail;

    let lineItems: Array<Item>;
    try {
      lineItems = JSON.parse(orderDetail.order.line_items);
    } catch (e) {
      throw e;
    }

    let items: Array<Item> = new Array<Item>();
    for (let item of lineItems) {
      const newItem = {} as Item;
      newItem.item_id = item.item_id;
      newItem.quantity = item.quantity;

      const tmp = productDetail.find((i) => i.item_id === newItem.item_id);
      if (tmp !== undefined) {
        newItem.name = tmp.name;
        newItem.price = tmp.price;
      } else {
        continue;
      }
      items.push(newItem);
    }

    this.setState({orderId: orderDetail.order.order_id, items: items});
  }

  render() {
    return (
      <Container>
        <Row className={"justify-content-md-center mt-5"}>
          <Col lg="1"></Col>
          <Col lg="10">
            <h1>Order #{this.state.orderId}</h1>
          </Col>
          <Col lg="1"></Col>
        </Row>

        <Row className={"justify-content-md-center mt-3"}>
          <Col lg="1"></Col>
          <Col lg="10">
            {generateTable(this.state.items)}
          </Col>
          <Col lg="1"></Col>
        </Row>
      </Container>
    );
  }

}
