import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AppDataSource_INVENTORY, AppDataSource_ORDER } from '../index';
import { Order } from '../entities/Order';
import { AddressInfo } from '../entities/AddressInfo';
import { PaymentInfo } from '../entities/PaymentInfo';
import { PlaceOrderDTO } from '../dtos/placeOrderDTO';
import { Item } from '../entities/Item';
import { In } from 'typeorm';
import {
  PlaceOrderFailedMessage,
  PlaceOrderSuccessMessage,
} from '../typings/Response';

@Injectable()
export class OrderService {
  async create(placeOrderDTO: PlaceOrderDTO) {
    const paymentRepository = AppDataSource_ORDER.getRepository(PaymentInfo);
    const addressRepository = AppDataSource_ORDER.getRepository(AddressInfo);
    const itemRepository = AppDataSource_INVENTORY.getRepository(Item);
    const orderRepository = AppDataSource_ORDER.getRepository(Order);

    const addressInfo = await addressRepository.findOne({
      where: [
        {
          addr_1: placeOrderDTO.addr_1,
          addr_2: placeOrderDTO.addr_2,
          zip: placeOrderDTO.zip,
        },
      ],
    });

    let addressSavedInfo: AddressInfo;
    if (!addressInfo) {
      const addressInfo = new AddressInfo().build(placeOrderDTO);
      try {
        addressSavedInfo = await addressRepository.save(addressInfo);
      } catch (e) {
        throw e;
      }
    } else {
      addressSavedInfo = addressInfo;
    }

    const paymentInfo = await paymentRepository.findOne({
      where: [
        {
          cardNum: placeOrderDTO.card_num,
          expDate: placeOrderDTO.exp_date,
          cvv: placeOrderDTO.cvv,
        },
      ],
    });

    let paymentSavedInfo: PaymentInfo;
    if (!paymentInfo) {
      const paymentInfo = new PaymentInfo().build(placeOrderDTO);
      try {
        paymentSavedInfo = await paymentRepository.save(paymentInfo);
      } catch (e) {
        throw e;
      }
    } else {
      paymentSavedInfo = paymentInfo;
    }

    const orderInfo = new Order().build(placeOrderDTO);
    orderInfo.payment = paymentSavedInfo;
    orderInfo.address = addressSavedInfo;

    // retrieve required items
    const itemIdList = placeOrderDTO.list_of_items.map((i) => i.id);
    const items = await itemRepository.find({
      where: {
        itemId: In(itemIdList),
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

    // check inventory
    for (const i of items) {
      if (
        i.quantity <
        placeOrderDTO.list_of_items.find((j) => j.id === i.itemId).quantity
      ) {
        throw new HttpException(
          JSON.stringify({
            message: 'bad request',
            reason: 'insufficient inventory',
          } as PlaceOrderFailedMessage),
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    // calc total price
    let totalPrice = 0;
    for (const i of items) {
      totalPrice +=
        i.price *
        placeOrderDTO.list_of_items.find((j) => j.id === i.itemId).quantity;
    }
    orderInfo.totalPrice = totalPrice;

    let orderSavedInfo;
    await (async () => {
      try {
        for (const item of await itemRepository.find({
          where: {
            itemId: In(itemIdList),
          },
        })) {
          item.quantity -= placeOrderDTO.list_of_items.find(
            (j) => j.id === item.itemId,
          ).quantity;
          await itemRepository.save(item);
        }
        orderSavedInfo = await orderRepository.save(orderInfo);
      } catch (e) {
        throw e;
      }
    });

    return JSON.stringify({
      message: 'created',
      order: orderSavedInfo,
      address: addressSavedInfo,
      payment: {
        cardNum: paymentInfo.cardNum,
        cardName: paymentInfo.cardName,
      },
    } as PlaceOrderSuccessMessage);
  }
}
