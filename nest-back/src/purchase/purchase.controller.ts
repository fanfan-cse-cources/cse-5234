import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ItemService } from '../item/item.service';
import { ItemDto } from '../dtos/itemDto.dto';

@Controller('purchase')
export class PurchaseController {
  constructor(private itemService: ItemService) {}

  @Get()
  GetProducts() {
    return this.itemService.getAllItem();
  }

  @Post('add_product')
  @UsePipes(ValidationPipe)
  public async CreateProducts(@Body() itemDto: ItemDto) {
    await this.itemService.create(itemDto);
  }
}
