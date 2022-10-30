import { Injectable } from '@nestjs/common';
import { Item } from '../entities/Item';
import { AppDataSource_INVENTORY } from '../index';
import { ItemDTO } from '../dtos/itemDTO';
import { AddItemSuccessMessage } from '../typings/Response';

@Injectable()
export class ItemService {
  async getAllItem(): Promise<Item[]> {
    const itemRepository = AppDataSource_INVENTORY.getRepository(Item);
    return await itemRepository.find();
  }

  async create(itemDto: ItemDTO) {
    const itemRepository = AppDataSource_INVENTORY.getRepository(Item);
    const itemSavedInfo = await itemRepository.save({ ...itemDto });

    return JSON.stringify({
      message: 'created',
      item: itemSavedInfo,
    } as AddItemSuccessMessage);
  }

  async findOne(id: number) {
    const itemRepository = AppDataSource_INVENTORY.getRepository(Item);
    return await itemRepository.findOne({ where: [{ item_id: id }] });
  }
}
