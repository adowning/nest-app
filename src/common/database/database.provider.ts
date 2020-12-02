import { createConnection } from 'typeorm'

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (overrides) =>
      await createConnection({
        type: 'postgres',
        port: 5436,
        host: 'localhost',
        username: 'nestjs_query',
        database: 'typeorm',
        autoLoadEntities: true,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],

        synchronize: true,
        ...overrides,
      }),
  },
]
