import {faker} from '@faker-js/faker';
import productDetail from "./data/productDetail.json"
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import {useState} from "react";
import styles from './layouts/ViewConfirmation.less';

const info = {
  order_id: faker.random.numeric(),
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  addr_1: faker.address.streetAddress(),
  addr_2: faker.address.secondaryAddress(),
  city: faker.address.cityName(),
  state: faker.address.stateAbbr(),
  zip: faker.address.zipCode(),
  card_number: faker.finance.creditCardNumber().slice(-4),
  card_issuer: faker.finance.creditCardIssuer(),
  card_exp: "08/24"
}

const generatePurchaseDetail = (i: number) => {
  return (
    <tr>
      <td>{productDetail[i].name}</td>
      <td>{productDetail[i].desc}</td>
      <td>${productDetail[i].price}</td>
      <td>{faker.random.numeric()}</td>
    </tr>
  )
}

export default function ViewConfirmation() {
  return (
    <div className={styles.body}>
      <h1>Confirmation</h1>
      <Alert variant='success'>
        Your order #{info.order_id} has been confirmed, {info.first_name}.
      </Alert>

      <div className={"row"}>
        <div className={"col p-5"}>
          <h2>Your Orders</h2>
          <table className={"table"}>
            <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Disc</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
            </tr>
            </thead>
            <tbody>
            {generatePurchaseDetail(1)}
            {generatePurchaseDetail(3)}
            </tbody>
          </table>
        </div>
      </div>

      <div className={"row"}>
        <div className={"col p-5"}>
          <h2>Shipping Address</h2>
          <div>
            <p className={styles.p}>{info.first_name} {info.last_name}</p>
            <p className={styles.p}>{info.addr_1}</p>
            <p className={styles.p}>{info.addr_2}</p>
          </div>
        </div>

        <div className={"col p-5"}>
          <h2>Payment Information</h2>
          <div>
            <p className={styles.p}>{info.first_name} {info.last_name}</p>
            <p
              className={styles.p}>{info.card_issuer.charAt(0).toUpperCase() + info.card_issuer.slice(1)} {info.card_number}</p>
            <p className={styles.p}>{info.card_exp}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
  