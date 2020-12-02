import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql'
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm'
import { Module } from '@nestjs/common'
import { OrderDTO } from './dto/order.dto'
import { OrderInput } from './dto/create-order.dto'
import { UpdateOrderInput } from './dto/update-order.input'
import { OrderEntity } from './entities/order.entity'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([OrderEntity])],
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
})
export class OrderModule {}
