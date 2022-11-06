import { IsNotEmpty, IsNumberString } from 'class-validator';
import { Type } from 'class-transformer';

export class OrderStateDTO {
  @IsNotEmpty()
  @IsNumberString()
  @Type(() => Number)
  order_id: number;
}
