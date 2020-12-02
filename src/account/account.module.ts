import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql'
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm'
import { Module } from '@nestjs/common'
import { AccountDTO } from './dto/account.dto'
import { AccountInputDTO } from './dto/account-input.dto'
import { UpdateAccountInput } from './dto/update-account.input'
import { AccountEntity } from './entities/account.entity'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { AccountService } from './account.service'
import { SmModule } from 'src/serviceMonster/sm.module'
import { AccountSchedule } from './account.schedule'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AccountRepository } from './account.repository'
import { ScheduleModule } from 'nest-schedule'

@Module({
  imports: [
    ScheduleModule.register(),
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        SmModule,

        NestjsQueryTypeOrmModule.forFeature([AccountEntity]),
        TypeOrmModule.forFeature([AccountRepository]),
      ],

      services: [AccountService],
      resolvers: [
        {
          DTOClass: AccountDTO,
          EntityClass: AccountEntity,
          CreateDTOClass: AccountInputDTO,
          UpdateDTOClass: UpdateAccountInput,
          enableTotalCount: true,
          enableAggregate: true,
          guards: [JwtAuthGuard],
        },
      ],
    }),
  ],
  providers: [AccountService, AccountSchedule],
})
export class AccountModule {}
