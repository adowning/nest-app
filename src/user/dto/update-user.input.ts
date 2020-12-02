import { UserInputDTO } from './create-user.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateUserInput extends PartialType(UserInputDTO) {
  @Field(() => Int)
  id: number
}
