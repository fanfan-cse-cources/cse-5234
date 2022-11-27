import {PaymentInfoRes} from "@/models/PaymentInfoRes";
import {AddressInfo} from "@/models/AddressInfo";
import {OrderInfo} from "@/models/OrderInfo";

export interface OrderDetail {
  address: AddressInfo,
  payment: PaymentInfoRes,
  order: OrderInfo
}
