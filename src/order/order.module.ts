import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql'
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm'
import { Module } from '@nestjs/common'
import { OrderDTO } from './dto/order.dto'
import { OrderInput } from './dto/create-order.dto'
import { UpdateOrderInput } from './dto/update-order.input'
import { OrderEntity } from './entities/order.entity'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ScheduleModule } from 'nest-schedule'
import { SmModule } from 'src/serviceMonster/sm.module'
import { OrderSchedule } from './order.schedule'
import { OrderService } from './order.service'
import { OrderRepository } from './order.repository'
import { AccountRepository } from 'src/account/account.repository'

@Module({
  imports: [
    ScheduleModule.register(),
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        SmModule,
        NestjsQueryTypeOrmModule.forFeature([OrderEntity]),
        TypeOrmModule.forFeature([OrderRepository, AccountRepository]),
      ],
      services: [OrderService],

      resolvers: [
        {
          DTOClass: OrderDTO,
          EntityClass: OrderEntity,
          CreateDTOClass: OrderInput,
          UpdateDTOClass: UpdateOrderInput,
          enableTotalCount: true,
          enableAggregate: true,
          guards: [JwtAuthGuard],
        },
      ],
    }),
  ],
  providers: [OrderService, OrderSchedule],
})
export class OrderModule {}
