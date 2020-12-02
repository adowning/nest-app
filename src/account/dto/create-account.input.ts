import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class AccountInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  accountName: string
  @Field(() => String, { description: 'Example field (placeholder)' })
  accountID: string
}
