import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets'
import { SubscribeMessage, MessageBody } from '@nestjs/websockets'

import io from 'socket.io'

import { LoggerService } from '../logger/logger.service'

import { IClientQuery } from './socket.interface'

// const appSettings = config.get<IAppSettings>('APP_SETTINGS');

@WebSocketGateway(3003, {
  // transports: ['websocket'],
  // pingInterval: 3000,
  // pingTimeout: 10000,
})
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  public server: io.Server

  constructor(private readonly logger: LoggerService) {}

  private getClientQuery(client: io.Socket): IClientQuery {
    return client.handshake.query as IClientQuery
  }

  public async handleConnection(client: io.Socket) {
    console.log('y')

    const { user_id } = this.getClientQuery(client)

    this.logger.info(`${user_id} - handleConnection`)

    return this.server.emit('event', { connected: user_id })
  }

  public async handleDisconnect(client: io.Socket) {
    console.log('x')
    const { user_id } = this.getClientQuery(client)
    this.logger.info(`${user_id} - handleDisconnect`)

    return this.server.emit('event', { disconnected: user_id })
  }

  @SubscribeMessage('events')
  handleEvent(@MessageBody() data: string): string {
    return data
  }
}
