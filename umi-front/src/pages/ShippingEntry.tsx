import {generateTable} from "./util/GenerateOrderDetails"

export default function ShippingEntry() {
  return (
    <div className={"row p-5"}>
      <h1>Shipping</h1>

      <div className={"col-12 col-md-6"}>
        {generateTable()}
      </div>

      <div className={"col-12 col-md-6"}>
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

          <div className={"row pb-2"}>
            <button type="submit" className={"btn btn-primary"}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
  