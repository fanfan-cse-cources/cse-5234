import { Test, TestingModule } from '@nestjs/testing';
import { ShipmentProcessingController } from './shipment-processing.controller';

describe('ShipmentProcessingController', () => {
  let controller: ShipmentProcessingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShipmentProcessingController],
    }).compile();

    controller = module.get<ShipmentProcessingController>(
      ShipmentProcessingController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
