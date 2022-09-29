import { Injectable } from '@nestjs/common';
import { Item } from '../entities/Item';
import { AppDataSource } from '../index';
import { ItemDto } from '../dtos/itemDto.dto';

@Injectable()
export class ItemService {
  async getAllItem(): Promise<Item[]> {
    const itemRepository = AppDataSource.getRepository(Item);
    return await itemRepository.find();
  }

  async create(itemDto: ItemDto): Promise<Item> {
    const itemRepository = AppDataSource.getRepository(Item);
    return await itemRepository.save({ ...itemDto });
  }
}
