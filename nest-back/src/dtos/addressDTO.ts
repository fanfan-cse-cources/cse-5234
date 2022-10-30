import { IsNotEmpty } from 'class-validator';

export class AddressDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  addr_1: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  state: string;

  @IsNotEmpty()
  zip: string;
}
