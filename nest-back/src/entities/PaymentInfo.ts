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
    this.cardName = orderDto.card_name;
    this.cardNum = orderDto.card_num;
    this.cvv = orderDto.cvv;
    this.expDate = orderDto.exp_date;
    return this;
  }

  @PrimaryGeneratedColumn({ type: 'int', name: 'payment_id', unsigned: true })
  paymentId: number;

  @Column('text', { name: 'card_num' })
  cardNum: string;

  @Column('tinytext', { name: 'exp_date' })
  expDate: string;

  @Column('int', { name: 'cvv', unsigned: true })
  cvv: number;

  @Column('text', { name: 'card_name' })
  cardName: string;

  @OneToMany(() => Order, (orders) => orders.payment)
  orders: Order[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
