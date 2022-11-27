import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {generateTable} from "@/pages/util/GenerateOrderDetails";
import {OrderDetail} from "@/models/OrderDetail";
import {Item} from "@/models/Item";
import Alert from "react-bootstrap/Alert";
import '../layouts/index.less';
import {AddressInfo} from "@/models/AddressInfo";
import {PaymentInfoRes} from "@/models/PaymentInfoRes";


export default class ViewOrder extends React.Component<{}, { orderId: number, items: Array<Item>, paymentConfirmation: string, status: string, address: AddressInfo, payment: PaymentInfoRes }> {

  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      orderId: 0,
      items: new Array<Item>(),
      paymentConfirmation: "undefined",
      status: "undefined",
      address: {
        name: "undefined",
        addr_1: "undefined",
        addr_2: "undefined",
        city: "undefined",
        state: "undefined",
        zip: "undefined",
      } as unknown as AddressInfo,
      payment: {
        confirmation: "undefined",
        card_last_four: "undefined",
        name: "undefined",
      } as unknown as PaymentInfoRes,
    };
    this.getCurrentOrder()
      .catch(e => {
        console.error(e);
      });
  }

  getCurrentOrder = async () => {
    const paymentConfirmation = localStorage.getItem('paymentConfirmation');
    let paymentConfirmationRes = "null";
    if (paymentConfirmation !== null) {
      paymentConfirmationRes = paymentConfirmation;
    }

    const productDetail = await (await fetch('http://localhost:3000/inventory-management/inventory/')).json() as Array<Item>;
    const orderDetail = await (await fetch(`http://localhost:3000/order-processing/order/view/${paymentConfirmationRes}`)).json() as OrderDetail;

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

    this.setState({
      orderId: orderDetail.order.order_id,
      items: items,
      paymentConfirmation: paymentConfirmationRes,
      status: orderDetail.order.status,
      address: orderDetail.address as unknown as AddressInfo,
      payment: orderDetail.payment as unknown as PaymentInfoRes
    });
  }

  render() {
    return (
      <Container>
        <Row className={"justify-content-md-center mt-3"}>
          <Alert variant='info'>
            Current Status: {this.state.status.toUpperCase()}
          </Alert>
        </Row>

        <Row className={"justify-content-md-center mt-5"}>
          <h1>Order #{this.state.orderId}</h1>
        </Row>

        <Row className={"justify-content-md-center mt-3"}>
          {generateTable(this.state.items)}
        </Row>

        <Row className={"justify-content-md-center mt-3"}>
          <Col lg={6}>
            <h2>Delivery</h2>
            <ul className={"conf"}>
              <li>{this.state.address.name}</li>
              <li>{this.state.address.addr_1}</li>
              <li>{this.state.address.addr_2}</li>
              <li>{this.state.address.city}, {this.state.address.state} {this.state.address.zip}</li>
            </ul>
          </Col>

          <Col lg={6}>
            <h2>Payment</h2>
            <ul className={"conf"}>
              <li>Confirmation: {this.state.paymentConfirmation}</li>
              <li>{this.state.payment.name}</li>
              <li>{this.state.payment.card_last_four}</li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }

}
