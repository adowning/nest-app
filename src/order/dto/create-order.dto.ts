import { Field, InputType } from '@nestjs/graphql'
import { IsString, IsNotEmpty } from 'class-validator'

@InputType('OrderInput')
export class OrderInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  name!: string
}
