import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Order } from './Order';
import { PlaceOrderDTO } from '../dtos/placeOrderDTO';

@Entity('PaymentInfos', { schema: 'db_order' })
export class PaymentInfo {
  public build(orderDto: PlaceOrderDTO) {
    this.card_name = orderDto.card_name;
    this.number = orderDto.number;
    this.cvv = orderDto.cvv;
    this.exp_month = orderDto.exp_month;
    this.exp_year = orderDto.exp_year;

    return this;
  }

  @PrimaryGeneratedColumn({ type: 'int', name: 'payment_id', unsigned: true })
  payment_id: number;

  @Column('text', { name: 'card_num' })
  number: string;

  @Column('int', { name: 'exp_date', unsigned: true })
  exp_month: number;

  @Column('int', { name: 'exp_year', unsigned: true })
  exp_year: number;

  @Column('int', { name: 'cvv', unsigned: true })
  cvv: number;

  @Column('text', { name: 'card_name' })
  card_name: string;

  @OneToMany(() => Order, (orders) => orders.payment)
  orders: Order[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
