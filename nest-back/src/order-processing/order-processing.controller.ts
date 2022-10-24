import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { OrderService } from '../order/order.service';
import { PlaceOrderDTO } from '../dtos/placeOrderDTO';

@Controller('order-processing')
export class OrderProcessingController {
  constructor(private orderService: OrderService) {}

  @Post('order/new')
  @UsePipes(ValidationPipe)
  public async CreateOrders(@Body() placeOrderDTO: PlaceOrderDTO) {
    return await this.orderService.create(placeOrderDTO);
  }
}
