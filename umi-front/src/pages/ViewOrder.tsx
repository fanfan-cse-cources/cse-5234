import {generateTable} from "@/pages/util/GenerateOrderDetails";
import {faker} from "@faker-js/faker";

const generateAllOrders = () => {
  return (
    <div className={"col-12 col-md-10"}>
      <h2>Order {faker.random.numeric()}</h2>
      {generateTable()}
    </div>
  )
}


export default function ViewOrder() {
  return (
    <div className={"row p-5"}>
      <h1>View Orders</h1>
      <div className={"col-12 col-md-1"}></div>
      <div className={"col-12 col-md-10"}>
        {generateAllOrders()}
        {generateAllOrders()}
      </div>
      <div className={"col-12 col-md-1"}></div>
    </div>
  );
}
  