import { Body, Controller, Post } from '@nestjs/common';
import { OrderStateDTO } from '../dtos/orderStateDTO';
import { ShipmentService } from '../shipment/shipment.service';

@Controller('shipment-processing')
export class ShipmentProcessingController {
  constructor(private shipmentService: ShipmentService) {}

  @Post('initiation')
  public async InitializeShipment(@Body() orderStateDTO: OrderStateDTO) {
    return await this.shipmentService.initialize(orderStateDTO);
  }

  @Post('shipment')
  public async CompleteShipment(@Body() orderStateDTO: OrderStateDTO) {
    return await this.shipmentService.complete(orderStateDTO);
  }
}
