import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { OrderEntity } from '../../order/entities/order.entity';
import { TagEntity } from '../../tag/tag.entity';
// import { UserEntity } from '../user/user.entity';

@Entity({ name: 'account_item' })
export class AccountEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false })
  accountName!: string;

  @Column({ nullable: false })
  accountID!: string;

  // @Column()
  // completed!: boolean;

  // @Column({ nullable: false })
  // ownerId!: string;

  // @ManyToOne(() => UserEntity, (u) => u.accounts, {
  //   onDelete: 'CASCADE',
  //   nullable: false,
  // })
  // owner!: UserEntity;
  @OneToMany(() => OrderEntity, (order) => order.account)
  orders?: OrderEntity[];

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @ManyToMany(() => TagEntity, (tag) => tag.accounts)
  @JoinTable()
  tags!: TagEntity[];

  @Column({ type: 'integer', nullable: false, default: 0 })
  priority!: number;

  @Column({ nullable: true })
  createdBy?: string;

  @Column({ nullable: true })
  updatedBy?: string;
}
