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

@Entity('Orders', { schema: 'db_order' })
export class Order {
  public build(orderDto: PlaceOrderDTO) {
    this.line_items = JSON.stringify(orderDto.line_items);
    return this;
  }

  @PrimaryGeneratedColumn({ type: 'int', name: 'order_id', unsigned: true })
  order_id: number;

  @Column('double', { name: 'total_price' })
  total_price: number;

  @Column('text', { name: 'line_items' })
  line_items: string;

  @Column('text', { name: 'status' })
  status: string;

  @ManyToOne(() => PaymentInfo, (info) => info.orders)
  @JoinColumn({ name: 'payment_id' })
  payment: PaymentInfo;

  @Column('text', { name: 'payment_confirmation', nullable: true })
  payment_confirm: string;

  @ManyToOne(() => AddressInfo, (info) => info.orders)
  @JoinColumn({ name: 'address_id' })
  address: AddressInfo;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
