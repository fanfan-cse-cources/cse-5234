import productDetail from "@/pages/data/productDetail.json";
import {faker} from "@faker-js/faker";
import {Table} from "react-bootstrap";

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
    <Table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
      </tr>
      </thead>
      <tbody>
      {generateOrderDetail(1)}
      {generateOrderDetail(3)}
      </tbody>
    </Table>
  )
}