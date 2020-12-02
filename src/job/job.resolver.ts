import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { JobService } from './job.service'
import { JobEntity } from './entities/job.entity'
import { CreateJobInput } from './dto/create-job.input'
import { UpdateJobInput } from './dto/update-job.input'

@Resolver(() => JobEntity)
export class JobResolver {
  constructor(private readonly jobService: JobService) {}

  @Query(() => JobEntity)
  createJob(@Args('createJobInput') createJobInput: CreateJobInput) {
    return this.jobService.create(createJobInput)
  }

  @Query(() => [JobEntity], { name: 'job' })
  findAll() {
    return this.jobService.findAll()
  }

  @Query(() => JobEntity, { name: 'job' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.jobService.findOne(id)
  }

  @Query(() => JobEntity)
  updateJob(@Args('updateJobInput') updateJobInput: UpdateJobInput) {
    return this.jobService.update(updateJobInput.id, updateJobInput)
  }

  @Query(() => JobEntity)
  removeJob(@Args('id', { type: () => Int }) id: number) {
    return this.jobService.remove(id)
  }
}
