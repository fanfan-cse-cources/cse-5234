import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AppDataSource_INVENTORY, AppDataSource_ORDER } from '../index';
import { Order } from '../entities/Order';
import { AddressInfo } from '../entities/AddressInfo';
import { PlaceOrderDTO } from '../dtos/placeOrderDTO';
import { Item } from '../entities/Item';
import { In } from 'typeorm';
import {
  PlaceOrderFailedMessage,
  PlaceOrderSuccessMessage,
} from '../typings/Response';
import { HttpService } from '@nestjs/axios';
import { PaymentInfo } from '../entities/PaymentInfo';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class OrderService {
  constructor(private readonly httpService: HttpService) {}

  async create(placeOrderDTO: PlaceOrderDTO) {
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

    const orderInfo = new Order().build(placeOrderDTO);
    orderInfo.address = addressSavedInfo;

    // retrieve required items
    const itemIdList = placeOrderDTO.line_items.map((i) => i.item_id);
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

    // check inventory
    for (const i of items) {
      if (
        i.quantity <
        placeOrderDTO.line_items.find((j) => j.item_id === i.item_id).quantity
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
        placeOrderDTO.line_items.find((j) => j.item_id === i.item_id).quantity;
    }
    orderInfo.total_price = totalPrice;
    orderInfo.status = 'new';

    let orderSavedInfo: Order;
    const paymentDTO = new PaymentInfo().build(placeOrderDTO);
    let paymentSavedInfo: PaymentInfo;
    await firstValueFrom(
      this.httpService.post(
        'http://localhost:3000/payment-processing/credit-card/payment/new',
        JSON.stringify(paymentDTO),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      ),
    ).then(async (res) => {
      paymentSavedInfo = res.data.payment;
      orderInfo.payment = paymentSavedInfo;
      orderInfo.payment_confirm = res.data.confirmation;

      orderSavedInfo = await orderRepository.save(orderInfo);
    });

    return JSON.stringify({
      message: 'created',
      order: {
        order_id: orderSavedInfo.order_id,
        line_items: orderSavedInfo.line_items,
        status: orderSavedInfo.status,
      },
      address: {
        name: addressSavedInfo.name,
        addr_1: addressSavedInfo.addr_1,
        addr_2: addressSavedInfo.addr_2,
        city: addressSavedInfo.city,
        state: addressSavedInfo.state,
        zip: addressSavedInfo.zip,
      },
      payment: {
        confirmation: orderSavedInfo.payment_confirm,
        card_last_four: orderSavedInfo.payment.number.slice(-4),
        name: orderSavedInfo.payment.card_name,
      },
    } as PlaceOrderSuccessMessage);
  }

  async find(payment_confirmation: string) {
    const orderRepository = AppDataSource_ORDER.getRepository(Order);
    const current_order = await orderRepository.findOne({
      where: {
        payment_confirm: payment_confirmation,
      },
    });

    return JSON.stringify({
      message: 'viewed',
      order: {
        order_id: current_order.order_id,
        line_items: current_order.line_items,
        status: current_order.status,
      },
      address: {
        name: current_order.address.name,
        addr_1: current_order.address.addr_1,
        addr_2: current_order.address.addr_2,
        city: current_order.address.city,
        state: current_order.address.state,
        zip: current_order.address.zip,
      },
      payment: {
        confirmation: current_order.payment_confirm,
        card_last_four: current_order.payment.number.slice(-4),
        name: current_order.payment.card_name,
      },
    } as PlaceOrderSuccessMessage);
  }
}
