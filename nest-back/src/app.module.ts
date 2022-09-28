import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PurchaseController } from './purchase/purchase.controller';
import { OrderModule } from './order/order.module';
import { ItemModule } from './item/item.module';
import { PaymentInfoModule } from './payment-info/payment-info.module';
import { ShippingInfoModule } from './shipping-info/shipping-info.module';
import { Item } from './entities/Item';
import { ItemService } from './item/item.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Item]),
    OrderModule,
    ItemModule,
    PaymentInfoModule,
    ShippingInfoModule,
  ],
  controllers: [AppController, PurchaseController],
  providers: [AppService, ItemService],
})
export class AppModule {}
