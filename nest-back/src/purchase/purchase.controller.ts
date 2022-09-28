import { Controller, Get } from '@nestjs/common';
import { ItemService } from '../item/item.service';

@Controller('purchase')
export class PurchaseController {
  constructor(private itemService: ItemService) {}
  @Get()
  GetProducts() {
    return this.itemService.getAllItem();
  }
}
