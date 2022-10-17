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

@Entity('AddressInfos', { schema: 'dev' })
export class AddressInfo {
  public build(addressDto: PlaceOrderDTO) {
    this.addr_1 = addressDto.addr_1;
    this.addr_2 = addressDto.addr_2 === undefined ? '' : addressDto.addr_2;
    this.city = addressDto.city;
    this.state = addressDto.state;
    this.zip = addressDto.zip;
    this.name = addressDto.name;
    return this;
  }

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

  @OneToMany(() => Order, (orders) => orders.address)
  orders: Order[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
