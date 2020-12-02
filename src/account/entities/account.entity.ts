import { PartialFilled } from 'src/common/partial-filled.model'
import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
  ManyToOne,
  Entity,
} from 'typeorm'
import { OrderEntity } from '../../order/entities/order.entity'
import { TagEntity } from '../../tag/tag.entity'
// import { UserEntity } from '../user/user.entity';

@Entity({ name: 'account' })
export class AccountEntity extends PartialFilled<AccountEntity> {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ nullable: false })
  accountName!: string

  @Column({ nullable: false })
  accountID!: string

  @Column({ nullable: false })
  primaryPhone!: string

  @Column({ nullable: true })
  firstName?: string

  @Column({ nullable: true })
  lastName?: string

  @Column({ nullable: true })
  prettyAddress?: string

  @Column({ nullable: true })
  companyName?: string

  @Column('text', { nullable: true, array: true })
  phoneList!: string[]

  @Column({ nullable: true })
  email?: string

  @Column({ nullable: true })
  commercial?: boolean

  // @ManyToOne(() => UserEntity, (u) => u.accounts, {
  //   onDelete: 'CASCADE',
  //   nullable: false,
  // })
  // owner!: UserEntity;
  @OneToMany(() => OrderEntity, (order) => order.account)
  orders?: OrderEntity[]

  @CreateDateColumn()
  created!: Date

  @UpdateDateColumn()
  updated!: Date

  @ManyToMany(() => TagEntity, (tag) => tag.accounts)
  @JoinTable()
  tags?: TagEntity[]

  @Column({ nullable: true })
  createdBy?: string

  @Column({ nullable: true })
  updatedBy?: string
}
