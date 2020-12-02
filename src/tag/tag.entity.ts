import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectType,
  ManyToMany,
} from 'typeorm'
import { AccountEntity } from '../account/entities/account.entity'
import { JobEntity } from '../job/entities/job.entity'
import { OrderEntity } from '../order/entities/order.entity'

@Entity({ name: 'tag' })
export class TagEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @CreateDateColumn()
  created!: Date

  @UpdateDateColumn()
  updated!: Date

  @ManyToMany((): ObjectType<OrderEntity> => OrderEntity, (o) => o.tags)
  orders!: OrderEntity[]

  @ManyToMany((): ObjectType<AccountEntity> => AccountEntity, (a) => a.tags)
  accounts!: AccountEntity[]

  @ManyToMany((): ObjectType<JobEntity> => JobEntity, (a) => a.tags)
  jobs!: JobEntity[]

  @Column({ nullable: true })
  createdBy?: string

  @Column({ nullable: true })
  updatedBy?: string
}
