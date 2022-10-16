import { Controller } from '@nestjs/common';
import { OrderService } from '../order/order.service';

@Controller('order-processing')
export class OrderProcessingController {
  constructor(private orderService: OrderService) {}
}
