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
} from 'typeorm'
import { OrderEntity } from '../../order/entities/order.entity'
// import { UserEntity } from '../../user/entities/user.entity';
import { AccountEntity } from '../../account/entities/account.entity'
import { TagEntity } from '../../tag/tag.entity'

@Entity({ name: 'job_item' })
export class JobEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  start!: Date

  @Column({ nullable: true })
  description?: string

  @Column()
  completed!: boolean

  @Column({ nullable: false })
  orderID!: string

  @ManyToOne(() => OrderEntity, (u) => u.jobs, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  order!: OrderEntity

  // @OneToMany(() => SubTaskEntity, (subTask) => subTask.job)
  // subTasks!: SubTaskEntity[];

  @CreateDateColumn()
  created!: Date

  @UpdateDateColumn()
  updated!: Date

  @ManyToMany(() => TagEntity, (tag) => tag.jobs)
  @JoinTable()
  tags!: TagEntity[]

  @Column({ type: 'integer', nullable: false, default: 0 })
  priority!: number

  @Column({ nullable: true })
  createdBy?: string

  @Column({ nullable: true })
  updatedBy?: string
}
