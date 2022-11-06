import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { OrderStateDTO } from '../dtos/orderStateDTO';
import { AppDataSource_INVENTORY, AppDataSource_ORDER } from '../index';
import { Order } from '../entities/Order';
import { Item } from '../entities/Item';
import { In } from 'typeorm';
import { PlaceOrderFailedMessage } from '../typings/Response';
import { AddressInfo } from '../entities/AddressInfo';

@Injectable()
export class ShipmentService {
  async initialize(orderStateDTO: OrderStateDTO) {
    const orderRepository = AppDataSource_ORDER.getRepository(Order);

    const orderInfo = await orderRepository.findOne({
      where: {
        order_id: orderStateDTO.order_id,
      },
    });

    orderInfo.status = 'processing';
    return await orderRepository.save(orderInfo);
  }

  async complete(orderStateDTO: OrderStateDTO) {
    const addressRepository = AppDataSource_ORDER.getRepository(AddressInfo);
    const itemRepository = AppDataSource_INVENTORY.getRepository(Item);
    const orderRepository = AppDataSource_ORDER.getRepository(Order);

    const orderInfo = await orderRepository.findOne({
      where: {
        order_id: orderStateDTO.order_id,
      },
    });

    const line_items = JSON.parse(orderInfo.line_items);
    const itemIdList = line_items.map((i) => i.item_id);
    const items = await itemRepository.find({
      where: {
        item_id: In(itemIdList),
      },
    });
    if (items.length !== itemIdList.length) {
      throw new HttpException(
        JSON.stringify({
          message: 'bad request',
          reason: 'invalid items',
        } as PlaceOrderFailedMessage),
        HttpStatus.BAD_REQUEST,
      );
    }

    try {
      await AppDataSource_INVENTORY.transaction(
        async (transactionalEntityManager) => {
          for (const item of await transactionalEntityManager.find(Item, {
            where: {
              item_id: In(itemIdList),
            },
          })) {
            item.quantity -= line_items.find(
              (j) => j.item_id === item.item_id,
            ).quantity;
            await transactionalEntityManager.save(item);
          }
        },
      );
    } catch (e) {
      throw e;
    }

    orderInfo.status = 'shipped';
    const orderSavedInfo = await orderRepository.save(orderInfo);

    return JSON.stringify({
      order: orderSavedInfo,
    });
  }
}
