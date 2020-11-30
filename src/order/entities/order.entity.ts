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
import { AccountEntity } from '../../account/entities/account.entity';
import { JobEntity } from '../../job/entities/job.entity';
import { TagEntity } from '../../tag/tag.entity';
// import { UserEntity } from '../../user/entities/user.entity';

@Entity({ name: 'order_item' })
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  type!: string;

  @Column({ nullable: false })
  orderID!: string;

  @Column({ nullable: false })
  accountID!: string;

  @ManyToOne(() => AccountEntity, (a) => a.orders, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  account!: AccountEntity;

  @OneToMany(() => JobEntity, (job) => job.order)
  jobs!: JobEntity[];

  @Column()
  dueDate!: Date;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @ManyToMany(() => TagEntity, (tag) => tag.orders)
  @JoinTable()
  tags!: TagEntity[];

  @Column({ type: 'integer', nullable: false, default: 0 })
  priority!: number;

  @Column({ nullable: true })
  createdBy?: string;

  @Column({ nullable: true })
  updatedBy?: string;
}
