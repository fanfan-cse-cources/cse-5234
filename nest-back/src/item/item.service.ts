import { Injectable } from '@nestjs/common';
import { Item } from '../entities/Item';
import { AppDataSource_INVENTORY } from '../index';
import { ItemDTO } from '../dtos/itemDTO';

@Injectable()
export class ItemService {
  async getAllItem(): Promise<Item[]> {
    const itemRepository = AppDataSource_INVENTORY.getRepository(Item);
    return await itemRepository.find();
  }

  async create(itemDto: ItemDTO): Promise<Item> {
    const itemRepository = AppDataSource_INVENTORY.getRepository(Item);
    return await itemRepository.save({ ...itemDto });
  }

  async findOne(id: number) {
    const itemRepository = AppDataSource_INVENTORY.getRepository(Item);
    return await itemRepository.findOne({ where: [{ itemId: id }] });
  }
}
