import { IsNotEmpty, IsNumberString } from 'class-validator';

export class OrderDTO {
  @IsNotEmpty()
  date: Date;

  @IsNotEmpty()
  @IsNumberString()
  payment_id: number;

  @IsNotEmpty()
  @IsNumberString()
  address_id: number;

  @IsNotEmpty()
  line_items: string;
}
