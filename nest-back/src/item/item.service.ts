import { Injectable } from '@nestjs/common';
import { Item } from '../entities/Item';
import { AppDataSource } from '../index';

@Injectable()
export class ItemService {
  async getAllItem(): Promise<Item[]> {
    const itemRepository = AppDataSource.getRepository(Item);
    return await itemRepository.find();
  }
}
