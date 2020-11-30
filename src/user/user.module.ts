import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { UserEntity } from './entities/user.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserDTO } from './user.dto';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { UserInputDTO } from './dto/create-user.input';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';

// @Module({
//   imports: [
//     NestjsQueryGraphQLModule.forFeature({
//       imports: [TypeOrmModule.forFeature([UserEntity])],
//       resolvers: [
//         {
//           DTOClass: UserDTO,
//           EntityClass: UserEntity,
//           CreateDTOClass: UserInputDTO,
//           enableTotalCount: true,
//           enableAggregate: true,
//           guards: [JwtAuthGuard],
//         },
//       ],
//     }),
//   ],
//   providers: [UserResolver, UserService, UserEntity],
//   exports: [UserService, UserEntity],
// })
// export class UserModule {}

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    // forwardRef(() => AuthModule),
  ],
  exports: [UserService],
  controllers: [],
  providers: [UserService, UserResolver],
})
export class UserModule {}
