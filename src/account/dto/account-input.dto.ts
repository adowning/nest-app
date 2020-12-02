import { Field, InputType } from '@nestjs/graphql'
import { IsString, IsNotEmpty } from 'class-validator'

@InputType('AccountInputDTO')
export class AccountInputDTO {
  @Field()
  @IsString()
  @IsNotEmpty()
  accountName!: string
}
