import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (overrides) =>
      await createConnection({
        type: 'postgres',
        port: 5436,
        host: 'localhost',
        username: 'typeorm',
        database: 'typeorm',
        autoLoadEntities: true,
        synchronize: true,
        ...overrides,
      }),
  },
];
