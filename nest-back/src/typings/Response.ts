import { Order } from '../entities/Order';
import { AddressInfo } from '../entities/AddressInfo';
import { Item } from '../entities/Item';

export interface MessageBase {
  message: string;
}

export interface PlaceOrderSuccessMessage extends MessageBase {
  order: Order;
  address: AddressInfo;
  payment: {
    cardNum: string;
    cardName: string;
  };
}

export interface PlaceOrderFailedMessage extends MessageBase {
  reason: string;
}

export interface AddItemSuccessMessage extends MessageBase {
  item: Item;
}
