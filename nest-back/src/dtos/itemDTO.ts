import { IsNotEmpty, IsNumberString } from 'class-validator';

export class ItemDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsNumberString()
  price: number;

  @IsNotEmpty()
  @IsNumberString()
  quantity: number;
}
