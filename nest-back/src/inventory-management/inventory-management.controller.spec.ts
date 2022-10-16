import { Test, TestingModule } from '@nestjs/testing';
import { InventoryManagementController } from './inventory-management.controller';
import { ItemService } from '../item/item.service';

describe('PurchaseController', () => {
  let controller: InventoryManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InventoryManagementController],
      providers: [ItemService],
    }).compile();

    controller = module.get<InventoryManagementController>(
      InventoryManagementController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
