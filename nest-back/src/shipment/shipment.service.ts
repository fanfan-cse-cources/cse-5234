import { Injectable } from '@nestjs/common';
import { OrderStateDTO } from '../dtos/orderStateDTO';
import { AppDataSource_ORDER } from '../index';
import { Order } from '../entities/Order';

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
    // const addressRepository = AppDataSource_ORDER.getRepository(AddressInfo);
    // const itemRepository = AppDataSource_INVENTORY.getRepository(Item);
    // const orderRepository = AppDataSource_ORDER.getRepository(Order);
    //
    // const itemIdList = placeOrderDTO.line_items.map((i) => i.item_id);
    //
    // await (async () => {
    //   try {
    //     for (const item of await itemRepository.find({
    //       where: {
    //         itemId: In(itemIdList),
    //       },
    //     })) {
    //       item.quantity -= placeOrderDTO.list_of_items.find(
    //         (j) => j.id === item.itemId,
    //       ).quantity;
    //       await itemRepository.save(item);
    //     }
    //   } catch (e) {
    //     throw e;
    //   }
    // });
  }
}
