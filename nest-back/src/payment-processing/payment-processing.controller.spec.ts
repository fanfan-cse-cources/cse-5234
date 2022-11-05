import { Test, TestingModule } from '@nestjs/testing';
import { PaymentProcessingController } from './payment-processing.controller';

describe('PaymentProcessingController', () => {
  let controller: PaymentProcessingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentProcessingController],
    }).compile();

    controller = module.get<PaymentProcessingController>(
      PaymentProcessingController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
