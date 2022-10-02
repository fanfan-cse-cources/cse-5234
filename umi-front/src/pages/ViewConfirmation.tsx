import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import {generateTable} from "./util/GenerateOrderDetails"
import {faker} from "@faker-js/faker";

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

export default function ViewConfirmation() {
  return (
    <div className={"row p-5"}>
      <div className={"col-md-2"}></div>
      <div className={"col-12 col-md-8"}>
        <h1>Confirmation</h1>
        <Alert variant='success' className={"col p-3"}>
          Your order #{info.order_id} has been confirmed, {info.first_name}.
        </Alert>
      </div>
      <div className={"col-md-2"}></div>

      <div className={"row"}>
        <div className={"col-md-2"}></div>
        <div className={"col-12 col-md-8"}>
          <h2>Your Orders</h2>
          {generateTable()}
        </div>
        <div className={"col-md-2"}></div>
      </div>

      <div className={"row"}>
        <div className={"col-md-2"}></div>
        <div className={"col-12 col-md-4"}>
          <h2>Shipping Address</h2>
          <div>
            <p>{info.first_name} {info.last_name}</p>
            <p>{info.addr_1}</p>
            <p>{info.addr_2}</p>
          </div>
        </div>

        <div className={"col-12 col-md-4"}>
          <div className={"col"}>
            <h2>Payment Information</h2>
            <p>{info.first_name} {info.last_name}</p>
            <p>{info.card_issuer.charAt(0).toUpperCase() + info.card_issuer.slice(1)} {info.card_number}</p>
            <p>{info.card_exp}</p>
          </div>
        </div>
      </div>
      <div className={"col-md-2"}></div>
    </div>
  );
}
  