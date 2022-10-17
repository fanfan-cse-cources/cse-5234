import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('Items', { schema: 'dev' })
export class Item {
  @PrimaryGeneratedColumn({ type: 'int', name: 'item_id', unsigned: true })
  itemId: number;

  @Column('text', { name: 'name' })
  name: string;

  @Column('text', { name: 'description' })
  description: string;

  @Column('double', { name: 'price' })
  price: number;

  @Column('int', { name: 'quantity', unsigned: true })
  quantity: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
