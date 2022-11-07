import {
  Body,
  Controller,
  Get,
  Param,
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

  @Get('order/view/:payment_confirmation')
  @UsePipes(ValidationPipe)
  public async FindOrder(@Param() params): Promise<string> {
    return await this.orderService.find(params.payment_confirmation);
  }
}
