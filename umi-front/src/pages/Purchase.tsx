import ViewOrder from "./ViewOrder";
import {useState} from "react";

export default function Purchase() {
  const productDetail = [
    {
      name: "Rice",
      desc: "Yummy Rice",
      price: "$1.2",
    },
    {
      name: "Noodle",
      desc: "Yummy Noodle",
      price: "$2.5",
    },
    {
      name: "Pizza",
      desc: "Yummy Pizza",
      price: "$7.99",
    },
    {
      name: "Hamburger",
      desc: "Yummy Hamburger",
      price: "$3.68",
    },
    {
      name: "Ramen",
      desc: "Yummy Ramen",
      price: "$11.99",
    }
  ];

  const [order, setOrder] = useState({
    quantity: [0, 0, 0, 0, 0]
  })
  const onAdd = (e: string | number, i: number) => {
    alert("Adding " + e + "of product " + productDetail[i].name)
  }
  
  const generaterow = (i: number) => {
    return (
      <tr>
        <td>{productDetail[i].name}</td>
        <td>{productDetail[i].desc}</td>
        <td>{productDetail[i].price}</td>
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
        <tr>
          <td>Noodle</td>
          <td>Yummy Noodle</td>
          <td>$2</td>
          <td>
            <input type="number" name="quantity" form="my_form" onChange={(e) => {
              order.quantity[0] = Number(e.target.value)
            }}/>
          </td>
          <td>
            <button type="button" form="my_form" onClick={(e) => onAdd(order.quantity[0], 0)}>add</button>
          </td>
        </tr>
        {generaterow(0)}
        {generaterow(1)}
        {generaterow(2)}
        {generaterow(3)}
        {generaterow(4)}
      </table>
    </div>
  );
}
  