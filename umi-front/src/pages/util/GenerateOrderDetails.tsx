import {Table} from "react-bootstrap";

const generateOrderDetail = (orderdetail, i: number) => {
  console.log(orderdetail)
  return (
    <tr>
      <td>{orderdetail.name}</td>
      <td>${orderdetail.price}</td>
      <td>{orderdetail.quantity}</td>
    </tr>
  )
}

export const generateTable = (orderdetails) => {
  console.log("generate tables")
  console.log(orderdetails)
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
      {orderdetails.map(function (orderdetails, i) {
        return generateOrderDetail(orderdetails, i)
      })}


      </tbody>
    </Table>
  )
}