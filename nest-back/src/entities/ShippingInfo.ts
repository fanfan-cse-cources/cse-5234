import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './Order';

@Entity('ShippingInfo', { schema: 'dev' })
export class ShippingInfo {
  @PrimaryGeneratedColumn({ type: 'int', name: 'address_id', unsigned: true })
  addressId: number;

  @Column('text', { name: 'name' })
  name: string;

  @Column('text', { name: 'addr_1' })
  addr_1: string;

  @Column('text', { name: 'addr_2' })
  addr_2: string;

  @Column('text', { name: 'city' })
  city: string;

  @Column('tinytext', { name: 'state' })
  state: string;

  @Column('tinytext', { name: 'zip' })
  zip: string;

  @OneToMany(() => Order, (order) => order.address)
  orders: Order[];
}
