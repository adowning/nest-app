import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm'
import { Module } from '@nestjs/common'
import { UserEntity } from './entities/user.entity'

@Module({
  imports: [NestjsQueryTypeOrmModule.forFeature([UserEntity])],
  exports: [NestjsQueryTypeOrmModule.forFeature([UserEntity])],
})
export class UserModule {}
// import { Module } from '@nestjs/common';
// import { UserService } from './user.service';
// // import { UserResolver } from './user.resolver';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserEntity } from './entities/user.entity';
// import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
// import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
// import { UserDTO } from './user.dto';

// // @Module({
// //   imports: [
// //     TypeOrmModule.forFeature([UserEntity]),
// //     // forwardRef(() => AuthModule),
// //   ],
// //   exports: [UserService],
// //   controllers: [],
// //   providers: [UserService, UserResolver],
// // })
// // export class UserModule {}
// @Module({
//   imports: [
//     NestjsQueryGraphQLModule.forFeature({
//       imports: [NestjsQueryTypeOrmModule.forFeature([UserEntity])],
//       resolvers: [{ DTOClass: UserDTO, EntityClass: UserEntity }],
//     }),
//   ],
// })
// export class UserModule {}
