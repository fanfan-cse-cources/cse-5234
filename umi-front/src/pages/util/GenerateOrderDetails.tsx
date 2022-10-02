import productDetail from "@/pages/data/productDetail.json";
import {faker} from "@faker-js/faker";

const generateOrderDetail = (i: number) => {
  return (
    <tr>
      <td>{productDetail[i].name}</td>
      <td>${productDetail[i].price}</td>
      <td>{faker.random.numeric()}</td>
    </tr>
  )
}

export const generateTable = () => {
  return (
    <table className={"table"}>
      <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Price</th>
        <th scope="col">Quantity</th>
      </tr>
      </thead>
      <tbody>
      {generateOrderDetail(1)}
      {generateOrderDetail(3)}
      </tbody>
    </table>
  )
}