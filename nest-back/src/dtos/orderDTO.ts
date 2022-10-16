import { IsNotEmpty, IsNumberString } from 'class-validator';

export class OrderDTO {
  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsNumberString()
  totalPrice: number;

  @IsNotEmpty()
  @IsNumberString()
  quantity: number;

  @IsNotEmpty()
  @IsNumberString()
  paymentId: number;

  @IsNotEmpty()
  @IsNumberString()
  addressId: number;
}
