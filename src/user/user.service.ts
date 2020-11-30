import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, Repository } from 'typeorm';
import { UserInputDTO } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userEntityRepository: Repository<UserEntity>,
  ) {}
  create(createUserInput: UserInputDTO) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  public findOne(
    where: FindConditions<UserEntity>,
  ): Promise<UserEntity | undefined> {
    return this.userEntityRepository.findOne({ where });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
  public async findOneByUsername(
    username: string,
  ): Promise<UserEntity | undefined> {
    return this.userEntityRepository.findOne({
      where: {
        username: username,
      },
    });
  }
}
