import { Test, TestingModule } from '@nestjs/testing';
import { OrderProcessingController } from './order-processing.controller';

describe('OrderProcessingController', () => {
  let controller: OrderProcessingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderProcessingController],
    }).compile();

    controller = module.get<OrderProcessingController>(
      OrderProcessingController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
