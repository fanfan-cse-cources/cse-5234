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

  @Get('inventory/item/:id')
  public async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ItemDTO> {
    return await this.itemService.findOne(id);
  }

  @Post('inventory/item/new')
  @UsePipes(ValidationPipe)
  public async CreateProducts(@Body() itemDto: ItemDTO) {
    return await this.itemService.create(itemDto);
  }
}
