import { Item } from '../entities/Item';
import { PaymentInfo } from '../entities/PaymentInfo';

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
    confirmation: string;
    card_last_four: string;
    name: string;
  };
}

export interface PlaceOrderFailedMessage extends MessageBase {
  reason: string;
}

export interface AddItemSuccessMessage extends MessageBase {
  item: Item;
}

export interface PaymentSuccessMessage extends MessageBase {
  payment: PaymentInfo;
  confirmation: string;
}
