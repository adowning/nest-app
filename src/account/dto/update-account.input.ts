import { AccountInput } from './create-account.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateAccountInput extends PartialType(AccountInput) {
  @Field(() => Int)
  priority?: number
  @Field(() => Int)
  id: number
}
