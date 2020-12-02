/* eslint-disable @typescript-eslint/ban-ts-comment */
import { INestApplication } from '@nestjs/common'
import { IoAdapter } from '@nestjs/platform-socket.io'

import { Redis } from 'ioredis'
import { Server, ServerOptions } from 'socket.io'
import redisIoAdapter from 'socket.io-redis'

// import config from 'config';
const redisSettings = {
  use: true,
  host: 'localhost',
  port: 6379,
  password: '',
}
const ria = redisIoAdapter.createAdapter('redis://localhost:6379')

// const redisSettings = config.get<IRedisSettings>('REDIS_SETTINGS');

export class CustomRedisIoAdapter extends IoAdapter {
  constructor(
    app: INestApplication,
    private readonly subClient: Redis,
    private readonly pubClient: Redis,
  ) {
    // @ts-ignore
    super(app)
  }

  public createIOServer(port: number, options?: ServerOptions): Server {
    const server = super.createIOServer(port, options)

    server.adapter(
      ria({
        host: redisSettings.host,
        port: redisSettings.port,
        auth_pass: redisSettings.password,
        // key: redisSettings.key,
        pubClient: this.pubClient,
        subClient: this.subClient,
      }),
    )

    return server
  }
}
