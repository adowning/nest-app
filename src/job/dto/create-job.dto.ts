import { Field, InputType } from '@nestjs/graphql'
import { IsString, IsNotEmpty } from 'class-validator'

@InputType('JobInput')
export class JobInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  name!: string
}
