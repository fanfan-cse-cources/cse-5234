import { Item } from '../entities/Item';

export interface MessageBase {
  message: string;
}

export interface PlaceOrderSuccessMessage extends MessageBase {
  order: {
    order_id: number;
    status: string;
  };
  address: {
    name: string;
    addr_1: string;
    addr_2: string;
    city: string;
    state: string;
    zip: string;
  };
  payment: {
    number: string;
    name: string;
  };
}

export interface PlaceOrderFailedMessage extends MessageBase {
  reason: string;
}

export interface AddItemSuccessMessage extends MessageBase {
  item: Item;
}
