import ViewOrder from "./ViewOrder";
import {useState} from "react";
import productDetail from "./data/productDetail.json"

export default function Purchase() {
  const [order, setOrder] = useState({
    quantity: Array.from(Array(productDetail.length).keys())
  })
  const onAdd = (e: number, i: number) => {
    alert("Adding " + e + " of product " + productDetail[i].name)
  }
  
  const generateRow = (i: number) => {
    return (
      <tr>
        <td>{productDetail[i].name}</td>
        <td>{productDetail[i].desc}</td>
        <td>${productDetail[i].price}</td>
        <td>
          <input type="number" name="quantity" form="my_form" onChange={(e) => {
            order.quantity[i] = Number(e.target.value)
          }}/>
        </td>
        <td>
          <button type="button" form="my_form" onClick={(e) => onAdd(order.quantity[i], i)}>add</button>
        </td>
      </tr>
    )
  }

  return (
    <div>
      <form method="GET" id="my_form"></form>

      <table>
        <tr>
          <th>Name</th>
          <th>Disc</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
        {generateRow(0)}
        {generateRow(1)}
        {generateRow(2)}
        {generateRow(3)}
        {generateRow(4)}
      </table>
    </div>
  );
}
  