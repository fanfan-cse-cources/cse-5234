import {generateTable} from "./util/GenerateOrderDetails"

export default function ConfirmOrder() {
  return (
    <div className={"row p-5"}>
      <div className={"col-md-2"}></div>
      <div className={"col-12 col-md-8"}>
        <h1>Payment</h1>
      </div>
      <div className={"col-md-2"}></div>

      <div className={"col-md-2"}></div>
      <div className={"col-12 col-md-4"}>
        <h2>Details</h2>
        {generateTable()}
      </div>

      <div className={"col-12 col-md-4"}>
        <h2>Delivery</h2>
        <form>
          <div className={"form-group pb-2"}>
            <label htmlFor="recipient">Recipient</label>
            <input type="text" className={"form-control"} id="recipient" aria-describedby="recipient"/>
          </div>

          <div className={"form-group pb-2"}>
            <label htmlFor="addr_1">Address 1</label>
            <input type="text" className={"form-control"} id="addr_1" aria-describedby="addr_1"/>
          </div>

          <div className={"form-group pb-2"}>
            <label htmlFor="addr_2">Address 2</label>
            <input type="text" className={"form-control"} id="addr_2" aria-describedby="addr_2"/>
          </div>

          <div className={"row"}>
            <div className={"col-6 form-group pb-2"}>
              <label htmlFor="city">City</label>
              <input type="text" className={"form-control"} id="city"/>
            </div>

            <div className={"col-6 form-group pb-2"}>
              <label htmlFor="state">State</label>
              <input type="text" className={"form-control"} id="state"/>
            </div>
          </div>

          <div className={"form-group pb-2"}>
            <label htmlFor="zip">Zip Code</label>
            <input type="text" className={"form-control"} id="zip" aria-describedby="zip"/>
          </div>

          <h2>Payment</h2>
          <div className={"form-group pb-2"}>
            <label htmlFor="CardNumber">Card Number</label>
            <input type="text" className={"form-control"} id="cardNumber" aria-describedby="cardHelp"/>
            <small id="cardHelp" className={"form-text text-muted"}>We'll never share your card information with anyone
              else.</small>
          </div>

          <div className={"form-group pb-2"}>
            <label htmlFor="CardholderName">Cardholder Name</label>
            <input type="text" className={"form-control"} id="cardName"/>
          </div>

          <div className={"row"}>
            <div className={"col-6 form-group pb-2"}>
              <label htmlFor="CVV">CVV</label>
              <input type="password" className={"form-control"} id="CVV"/>
            </div>

            <div className={"col-6 form-group pb-2"}>
              <label htmlFor="Exp Date">Exp Date</label>
              <input type="text" className={"form-control"} id="expDate" placeholder="mm/yy"/>
            </div>
          </div>

          <div className={"row pb-2"}>
            <button type="submit" className={"btn btn-primary"}>Submit</button>
          </div>
        </form>
      </div>
      <div className={"col-md-2"}></div>
    </div>
  );
}
  