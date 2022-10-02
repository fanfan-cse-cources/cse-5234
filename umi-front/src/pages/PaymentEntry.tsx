import productDetail from "@/pages/data/productDetail.json";
import {faker} from "@faker-js/faker";

const generatePaymentDetail = (i: number) => {
  return (
    <tr>
      <td>{productDetail[i].name}</td>
      <td>${productDetail[i].price}</td>
      <td>{faker.random.numeric()}</td>
    </tr>
  )
}

export default function PaymentEntry() {
    return (
      <div className={"row p-5"}>
        <h1>Make Your Payment</h1>

        <div className={"col-12 col-md-6"}>
          <h2 className={"p-3"}>Order Details</h2>
          <table className={"table"}>
            <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
            </tr>
            </thead>
            <tbody>
            {generatePaymentDetail(1)}
            {generatePaymentDetail(3)}
            </tbody>
          </table>
        </div>

        <div className={"col-12 col-md-6"}>
          <h2 className={"p-3"}>Payment Information</h2>
          <form>
            <div className={"form-group pb-2"}>
              <label htmlFor="CardNumber">Card Number</label>
              <input type="text" className={"form-control"} id="cardNumber" aria-describedby="cardHelp" />
              <small id="cardHelp" className={"form-text text-muted"}>We'll never share your card information with anyone
                else.</small>
            </div>

            <div className={"form-group pb-2"}>
              <label htmlFor="CardholderName">Cardholder Name</label>
              <input type="text" className={"form-control"} id="cardName" />
            </div>

            <div className={"row"}>
              <div className={"col-6 form-group pb-2"}>
                <label htmlFor="CVV">CVV</label>
                <input type="password" className={"form-control"} id="CVV" />
              </div>

              <div className={"col-6 form-group pb-2"}>
                <label htmlFor="Exp Date">Exp Date</label>
                <input type="text" className={"form-control"} id="expDate" placeholder="mm/yy" />
              </div>
            </div>

            <div className={"row pb-2"}>
              <button type="submit" className={"btn btn-primary"}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  