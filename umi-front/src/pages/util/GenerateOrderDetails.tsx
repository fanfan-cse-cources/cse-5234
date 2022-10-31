import productDetail from "@/pages/data/productDetail.json";
import {faker} from "@faker-js/faker";
import {Table} from "react-bootstrap";

const generateOrderDetail = (orderdetails,i: number) => {
  return (
    <tr>
      <td>{orderdetails[i].name}</td>
      <td>${orderdetails[i].price}</td>
      <td>{orderdetails[i].quantity}</td>
    </tr>
  )
}

export const generateTable = (orderdetails) => {
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
      {/* {for (var i=0;i<orderdetails.length;i+=1){
generateOrderDetail(orderdetails,index)
      } 
      } */}
      {generateOrderDetail(orderdetails,0)}
      </tbody>
    </Table>
  )
}