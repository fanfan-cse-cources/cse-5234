import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Item } from './entities/Item';
import { ConfigModule } from '@nestjs/config';
import { Order } from './entities/Order';
import { PaymentInfo } from './entities/PaymentInfo';
import { AddressInfo } from './entities/AddressInfo';

ConfigModule.forRoot();

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [Item, Order, PaymentInfo, AddressInfo],
  synchronize: true,
  logging: true,
});

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
    console.log(`[main] process running`);
  })
  .catch((error) => console.log(error));
