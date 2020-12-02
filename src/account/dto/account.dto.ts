import {
  FilterableField,
  FilterableConnection,
  Authorize,
  Relation,
} from '@nestjs-query/query-graphql'
import { ObjectType, ID, GraphQLISODateTime, Field } from '@nestjs/graphql'
import { OrderDTO } from '../../order/dto/order.dto'
import { TagDTO } from '../../tag/dto/tag.dto'
import { UserDTO } from '../../user/user.dto'
import { UserContext } from '../../auth/auth.interfaces'

@ObjectType('Account')
// @Relation('owner', () => UserDTO, { disableRemove: true, disableUpdate: true })
@FilterableConnection('orders', () => OrderDTO, { disableRemove: true })
@FilterableConnection('tags', () => TagDTO)
export class AccountDTO {
  @FilterableField(() => ID)
  id!: number

  @FilterableField()
  accountID!: string

  @FilterableField()
  accountName!: string

  @FilterableField({ nullable: true })
  firstName?: string

  @FilterableField({ nullable: true })
  lastName?: string

  @FilterableField()
  commercial?: boolean

  @FilterableField(() => GraphQLISODateTime)
  created!: Date

  @FilterableField(() => GraphQLISODateTime)
  updated!: Date

  @FilterableField({ nullable: true })
  email?: string

  @FilterableField({ nullable: true })
  prettyAddress?: string

  @FilterableField({ nullable: true })
  companyName?: string

  //   @FilterableField({ nullable: true })
  //   address?: JSON;
  // @FilterableField(() => [String], { nullable: true })
  // phoneList!: string[]

  @FilterableField({ nullable: false })
  primaryPhone!: string

  @FilterableField({ nullable: true })
  createdBy?: string

  @FilterableField({ nullable: true })
  updatedBy?: string
}
