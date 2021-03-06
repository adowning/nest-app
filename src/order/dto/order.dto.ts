import { FilterableField } from '@nestjs-query/query-graphql'
import { ObjectType, ID, GraphQLISODateTime, Field } from '@nestjs/graphql'

@ObjectType('Order')
export class OrderDTO {
  @FilterableField(() => ID)
  id!: string

  @FilterableField()
  orderID!: string

  @FilterableField()
  orderType!: string

  @FilterableField()
  orderNumber!: number

  @FilterableField()
  accountID!: string

  @Field(() => GraphQLISODateTime)
  created?: Date

  @Field(() => GraphQLISODateTime)
  updated?: Date
}
