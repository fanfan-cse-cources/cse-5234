import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Item } from './entities/Item';
import { ConfigModule } from '@nestjs/config';
import { Order } from './entities/Order';
import { PaymentInfo } from './entities/PaymentInfo';
import { AddressInfo } from './entities/AddressInfo';

ConfigModule.forRoot();

export const AppDataSource_ORDER = new DataSource({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME_ORDERS,
  entities: [Order, PaymentInfo, AddressInfo],
  synchronize: true,
  logging: true,
});

export const AppDataSource_INVENTORY = new DataSource({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME_INVENTORY,
  entities: [Item],
  synchronize: true,
  logging: true,
});

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
(async () => {
  try {
    await AppDataSource_INVENTORY.initialize();
    await AppDataSource_ORDER.initialize();
  } catch (e) {
    console.error(e);
  }
  console.log(`[main] process running`);
})();
