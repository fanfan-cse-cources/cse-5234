export interface MessageBase {
  message: string;
}

export interface PlaceOrderSuccessMessage extends MessageBase {
  orderId: number;
}

export interface PlaceOrderFailedMessage extends MessageBase {
  reason: string;
}
