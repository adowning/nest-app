import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { UserService } from './user.service'
import { UserEntity } from './entities/user.entity'
// import { UserInputDTO } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'

@Resolver(() => UserEntity)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserEntity)
  createUser(@Args('createUserInput') createUserInput: UserEntity) {
    return this.userService.create(createUserInput)
  }

  @Query(() => [UserEntity], { name: 'user' })
  findAll() {
    return this.userService.findAll()
  }

  @Query(() => UserEntity, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne({ id: id })
  }

  @Query(() => UserEntity)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput)
  }

  @Query(() => UserEntity)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.remove(id)
  }
}
