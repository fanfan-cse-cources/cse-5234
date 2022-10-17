import {
  IsNotEmpty,
  IsNumberString,
  Validate,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Item } from '../typings/Item';

@ValidatorConstraint({ name: 'itemList', async: false })
export class CustomItemList implements ValidatorConstraintInterface {
  validate(text: any, args: ValidationArguments) {
    if (!Array.isArray(args.value)) {
      return false;
    }
    for (const i of args.value) {
      if (!('id' in i) || !('quantity' in i)) {
        return false;
      }
    }
    return true;
  }

  defaultMessage(args: ValidationArguments) {
    return 'Invalid item list';
  }
}

export class PlaceOrderDTO {
  @Validate(CustomItemList)
  list_of_items: Array<Item>;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  addr_1: string;

  addr_2: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  state: string;

  @IsNotEmpty()
  zip: string;

  @IsNotEmpty()
  card_num: string;

  @IsNotEmpty()
  exp_date: string;

  @IsNotEmpty()
  @IsNumberString()
  cvv: number;

  @IsNotEmpty()
  card_name: string;
}
