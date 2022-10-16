import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ItemService } from '../item/item.service';
import { ItemDTO } from '../dtos/itemDTO';

@Controller('inventory-management')
export class InventoryManagementController {
  constructor(private itemService: ItemService) {}

  @Get('inventory')
  GetProducts() {
    return this.itemService.getAllItem();
  }

  @Get('items/:id')
  public async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ItemDTO> {
    return await this.itemService.findOne(id);
  }

  @Post('add_product')
  @UsePipes(ValidationPipe)
  public async CreateProducts(@Body() itemDto: ItemDTO) {
    await this.itemService.create(itemDto);
  }
}
