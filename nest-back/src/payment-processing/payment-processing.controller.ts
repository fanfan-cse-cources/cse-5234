import { Body, Controller, Post } from '@nestjs/common';
import { PaymentDTO } from '../dtos/paymentDTO';
import { PaymentService } from '../payment/payment.service';

@Controller('payment-processing')
export class PaymentProcessingController {
  constructor(private paymentService: PaymentService) {}

  @Post('credit-card/payment/new')
  public async CreatePayment(@Body() paymentDTO: PaymentDTO) {
    return await this.paymentService.create(paymentDTO);
  }
}
