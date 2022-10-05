import {generateTable} from "@/pages/util/GenerateOrderDetails";
import {faker} from "@faker-js/faker";

const generateAllOrders = () => {
  return (
    <div>
      <h2>Order #{faker.random.numeric()}</h2>
      {generateTable()}
    </div>
  )
}

export default function ViewOrder() {
  return (
    <div className={"row p-5"}>
      <div className={"col-md-2"}></div>
      <div className={"col-12 col-md-8"}>
        <h1>View Order</h1>
      </div>
      <div className={"col-md-2"}></div>

      <div className={"col-12 col-md-2"}></div>
      <div className={"col-12 col-md-8"}>
        {generateAllOrders()}
        {generateAllOrders()}
      </div>
      <div className={"col-12 col-md-2 a"}></div>
    </div>
  );
}
  