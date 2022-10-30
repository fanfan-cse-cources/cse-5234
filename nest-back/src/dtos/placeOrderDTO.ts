import {
  IsNotEmpty,
  IsNumberString,
  Validate,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Item } from '../typings/Item';

@ValidatorConstraint({ name: 'line_items', async: false })
export class CustomItemList implements ValidatorConstraintInterface {
  validate(text: any, args: ValidationArguments) {
    if (!Array.isArray(args.value)) {
      return false;
    }
    for (const i of args.value) {
      if (!('item_id' in i) || !('quantity' in i)) {
        return false;
      }
    }
    return true;
  }

  defaultMessage(args: ValidationArguments) {
    return 'Invalid line items';
  }
}

export class PlaceOrderDTO {
  @Validate(CustomItemList)
  line_items: Array<Item>;

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
  number: string;

  @IsNotEmpty()
  exp_month: number;

  @IsNotEmpty()
  exp_year: number;

  @IsNotEmpty()
  @IsNumberString()
  cvv: number;

  @IsNotEmpty()
  card_name: string;
}
