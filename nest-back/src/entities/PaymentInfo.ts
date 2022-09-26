import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './Order';

@Entity('PaymentInfo', { schema: 'dev' })
export class PaymentInfo {
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

  @OneToMany(() => Order, (order) => order.payment)
  orders: Order[];
}
