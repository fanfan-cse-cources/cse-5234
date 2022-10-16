import { IsNotEmpty, IsNumberString } from 'class-validator';

export class PaymentDTO {
  @IsNotEmpty()
  cardNum: string;

  @IsNotEmpty()
  expDate: string;

  @IsNotEmpty()
  cardName: string;

  @IsNotEmpty()
  @IsNumberString()
  paymentId: number;
  cvv: number;
}
