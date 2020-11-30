import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { typeormOrmConfig } from './common/helpers/typeorm.helpers';
import { AccountModule } from './account/account.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { JobModule } from './job/job.module';
import { OrderModule } from './order/order.module';
import { TagModule } from './tag/tag.module';
import { UserEntity } from './user/entities/user.entity';
import { TagEntity } from './tag/tag.entity';
import { OrderEntity } from './order/entities/order.entity';
import { AccountEntity } from './account/entities/account.entity';
import { JobEntity } from './job/entities/job.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        return {
          type: 'postgres',
          host: 'localhost',
          port: 5436,
          username: 'typeorm',
          // password: configService.get('DB_PASSWORD'),
          database: 'typeorm',
          // entities: [__dirname + './../**/**.entity{.ts,.js}'],S
          entities: [
            UserEntity,
            TagEntity,
            OrderEntity,
            AccountEntity,
            JobEntity,
          ],

          synchronize: true,
        } as TypeOrmModuleAsyncOptions;
      },
    }),
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
    AccountModule,
    OrderModule,
    JobModule,
    UserModule,
    AuthModule,
    TagModule,
  ],
})
export class AppModule {}
