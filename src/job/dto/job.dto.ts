import { FilterableField } from '@nestjs-query/query-graphql'
import { ObjectType, ID, GraphQLISODateTime, Field } from '@nestjs/graphql'

@ObjectType('Job')
export class JobDTO {
  @FilterableField(() => ID)
  id!: string

  @FilterableField()
  jobID!: string

  @FilterableField()
  jobName!: string

  @Field(() => GraphQLISODateTime)
  created!: Date

  @Field(() => GraphQLISODateTime)
  updated!: Date
}
