import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PaymentInfo } from './PaymentInfo';
import { AddressInfo } from './AddressInfo';
import { PlaceOrderDTO } from '../dtos/placeOrderDTO';

@Entity('Orders', { schema: 'dev' })
export class Order {
  public build(orderDto: PlaceOrderDTO) {
    this.listOfItems = JSON.stringify(orderDto.list_of_items);
    return this;
  }

  @PrimaryGeneratedColumn({ type: 'int', name: 'order_id', unsigned: true })
  orderId: number;

  @Column('double', { name: 'total_price' })
  totalPrice: number;

  @Column('text', { name: 'list_of_items' })
  listOfItems: string;

  @ManyToOne(() => PaymentInfo, (info) => info.orders)
  @JoinColumn({ name: 'paymentId' })
  payment: PaymentInfo;

  @ManyToOne(() => AddressInfo, (info) => info.orders)
  @JoinColumn({ name: 'addressId' })
  address: AddressInfo;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
