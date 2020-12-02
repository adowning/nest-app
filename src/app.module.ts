import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TagModule } from './tag/tag.module'
import { typeormOrmConfig } from './common/helpers/typeorm.helpers'
import { AuthModule } from './auth/auth.module'
import { SmModule } from './serviceMonster/sm.module'
import { UserModule } from './user/user.module'
import { AccountModule } from './account/account.module'
import { OrderModule } from './order/order.module'
import { JobModule } from './job/job.module'
import { RedisModule } from './common/redis/redis.module'
import { SocketModule } from './common/socket/socket.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormOrmConfig('nestjs_query')),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      context: ({ req }: { req: { headers: Record<string, string> } }) => ({
        req,
      }),
    }),
    SmModule,
    AuthModule,
    UserModule,
    AccountModule,
    OrderModule,
    JobModule,
    TagModule,
    RedisModule,
    SocketModule,
  ],
})
export class AppModule {}
