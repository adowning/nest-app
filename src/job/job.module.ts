import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql'
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm'
import { Module } from '@nestjs/common'
import { JobDTO } from './dto/job.dto'
import { JobInput } from './dto/create-job.dto'
import { UpdateJobInput } from './dto/update-job.input'
import { JobEntity } from './entities/job.entity'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([JobEntity])],
      resolvers: [
        {
          DTOClass: JobDTO,
          EntityClass: JobEntity,
          CreateDTOClass: JobInput,
          UpdateDTOClass: UpdateJobInput,
          enableTotalCount: true,
          enableAggregate: true,
          guards: [JwtAuthGuard],
        },
      ],
    }),
  ],
})
export class JobModule {}
