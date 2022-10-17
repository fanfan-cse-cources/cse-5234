import { IsNotEmpty, IsNumberString } from 'class-validator';

export class OrderDTO {
  @IsNotEmpty()
  date: Date;

  @IsNotEmpty()
  @IsNumberString()
  paymentId: number;

  @IsNotEmpty()
  @IsNumberString()
  addressId: number;

  @IsNotEmpty()
  listOfItems: string;
}
