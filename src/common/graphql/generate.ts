import { NestFactory } from '@nestjs/core'
import {
  GraphQLSchemaBuilderModule,
  GraphQLSchemaFactory,
} from '@nestjs/graphql'
import { printSchema } from 'graphql'
// import { AccountResolver } from '../../account/account.resolver';
import { JobResolver } from '../../job/job.resolver'
import { OrderResolver } from '../../order/order.resolver'
import { UserResolver } from '../../user/user.resolver'

async function generateSchema() {
  const app = await NestFactory.create(GraphQLSchemaBuilderModule)
  await app.init()

  const gqlSchemaFactory = app.get(GraphQLSchemaFactory)
  const schema = await gqlSchemaFactory.create([
    UserResolver,
    // AccountResolver,
    JobResolver,
    OrderResolver,
  ])
  console.log(printSchema(schema))
}
export default generateSchema()
