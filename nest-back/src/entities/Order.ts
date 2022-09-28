import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PaymentInfo } from './PaymentInfo';
import { ShippingInfo } from './ShippingInfo';

@Index('address_id', ['addressId'], {})
@Index('payment_id', ['paymentId'], {})
@Entity('Order', { schema: 'dev' })
export class Order {
  @PrimaryGeneratedColumn({ type: 'int', name: 'order_id', unsigned: true })
  orderId: number;

  @Column('date', { name: 'date' })
  date: string;

  @Column('double', { name: 'total_price' })
  totalPrice: number;

  @Column('text', { name: 'item_ids' })
  itemIds: string;

  @Column('int', { name: 'payment_id', unsigned: true })
  paymentId: number;

  @Column('int', { name: 'address_id', unsigned: true })
  addressId: number;

  @ManyToOne(() => PaymentInfo, (paymentInfo) => paymentInfo.orders, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'payment_id', referencedColumnName: 'paymentId' }])
  payment: PaymentInfo;

  @ManyToOne(() => ShippingInfo, (shippingInfo) => shippingInfo.orders, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'address_id', referencedColumnName: 'addressId' }])
  address: ShippingInfo;
}
