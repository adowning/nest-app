import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AccountService } from './account.service';
import { AccountEntity } from './entities/account.entity';
import { CreateAccountInput } from './dto/create-account.input';
import { UpdateAccountInput } from './dto/update-account.input';

@Resolver(() => AccountEntity)
export class AccountResolver {
  constructor(private readonly accountService: AccountService) {}

  @Mutation(() => AccountEntity)
  createAccount(
    @Args('createAccountInput') createAccountInput: CreateAccountInput,
  ) {
    return this.accountService.create(createAccountInput);
  }

  @Query(() => [AccountEntity], { name: 'account' })
  findAll() {
    return this.accountService.findAll();
  }

  @Query(() => AccountEntity, { name: 'account' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.accountService.findOne(id);
  }

  @Mutation(() => AccountEntity)
  updateAccount(
    @Args('updateAccountInput') updateAccountInput: UpdateAccountInput,
  ) {
    return this.accountService.update(
      updateAccountInput.id,
      updateAccountInput,
    );
  }

  @Mutation(() => AccountEntity)
  removeAccount(@Args('id', { type: () => Int }) id: number) {
    return this.accountService.remove(id);
  }
}
