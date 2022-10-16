import { Injectable } from '@nestjs/common';
import { OrderDTO } from '../dtos/orderDTO';
import { AppDataSource } from '../index';
import { Order } from '../entities/Order';

@Injectable()
export class OrderService {
  async create(orderDto: OrderDTO) {
    const orderRepository = AppDataSource.getRepository(Order);
    return await orderRepository.save({ ...orderDto });
  }
}
