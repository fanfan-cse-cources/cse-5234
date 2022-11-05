import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PaymentDTO } from '../dtos/paymentDTO';
import { AppDataSource_ORDER } from '../index';
import { PaymentInfo } from '../entities/PaymentInfo';
import { PlaceOrderFailedMessage } from '../typings/Response';

@Injectable()
export class PaymentService {
  async create(paymentDTO: PaymentDTO) {
    const current_year = new Date().getFullYear();
    const current_month = new Date().getMonth() + 1;
    if (
      paymentDTO.exp_year < current_year ||
      (paymentDTO.exp_year == current_year &&
        paymentDTO.exp_month < current_month)
    ) {
      throw new HttpException(
        JSON.stringify({
          message: 'bad request',
          reason: 'invalid card expiration date',
        } as PlaceOrderFailedMessage),
        HttpStatus.BAD_REQUEST,
      );
    }

    const paymentRepository = AppDataSource_ORDER.getRepository(PaymentInfo);

    const paymentInfo = await paymentRepository.findOne({
      where: [
        {
          number: paymentDTO.number,
          exp_month: paymentDTO.exp_month,
          exp_year: paymentDTO.exp_year,
          cvv: paymentDTO.cvv,
          card_name: paymentDTO.card_name,
        },
      ],
    });

    let paymentSavedInfo: PaymentInfo;
    if (!paymentInfo) {
      const paymentInfo = new PaymentInfo().build(paymentDTO);
      try {
        paymentSavedInfo = await paymentRepository.save(paymentInfo);
      } catch (e) {
        throw e;
      }
    } else {
      paymentSavedInfo = paymentInfo;
    }

    return {
      msg: 'success',
      payment: paymentSavedInfo,
    };
  }
}
