import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryManagementController } from './inventory-management/inventory-management.controller';
import { ItemModule } from './item/item.module';
import { Item } from './entities/Item';
import { ItemService } from './item/item.service';
import { Order } from './entities/Order';
import { PaymentInfo } from './entities/PaymentInfo';
import { AddressInfo } from './entities/AddressInfo';
import { OrderProcessingController } from './order-processing/order-processing.controller';
import { OrderService } from './order/order.service';
import { PaymentInfoModule } from './payment-info/payment-info.module';
import { ShippingInfoModule } from './shipping-info/shipping-info.module';
import { OrderModule } from './order/order.module';
import { ShipmentProcessingController } from './shipment-processing/shipment-processing.controller';
import { PaymentProcessingController } from './payment-processing/payment-processing.controller';
import { PaymentService } from './payment/payment.service';
import { ShipmentService } from './shipment/shipment.service';
import { HttpModule } from '@nestjs/axios';
import { TasksService } from './tasks/tasks.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME_ORDER,
      entities: ['./entities/*.ts'],
      synchronize: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME_INVENTORY,
      entities: ['./entities/*.ts'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Item, Order, PaymentInfo, AddressInfo]),
    ItemModule,
    PaymentInfoModule,
    ShippingInfoModule,
    OrderModule,
    HttpModule,
  ],
  controllers: [
    AppController,
    InventoryManagementController,
    OrderProcessingController,
    ShipmentProcessingController,
    PaymentProcessingController,
  ],
  providers: [
    AppService,
    ItemService,
    OrderService,
    PaymentService,
    ShipmentService,
    TasksService,
  ],
})
export class AppModule {}
