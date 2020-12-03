import ms from 'ms'
import { Interval, NestSchedule } from 'nest-schedule'
import { Injectable, Logger, OnModuleInit } from '@nestjs/common'
import { OrderService } from './order.service'
import { SMApi } from 'src/common/helpers/smApi'
import { OrderRepository } from './order.repository'
import { convertOrder } from 'src/common/helpers/rawSmtoEntity'
import { SmOrder } from 'src/serviceMonster/sm-order.model'

@Injectable()
export class OrderSchedule extends NestSchedule implements OnModuleInit {
  private readonly logger = new Logger(OrderSchedule.name)
  private readonly getAllOrders = new SMApi().getAllOrders
  private readonly getOrdersSinceLastSync = new SMApi().getOrdersSinceLastSync
  private lastOrdersSync: Date = null
  private fetchedRecords: [SmOrder?]
  constructor(
    private readonly orderService: OrderService,
    private readonly repo: OrderRepository,
  ) {
    super()
  }

  onModuleInit() {
    console.log(`runFetchAndSyncOrders Initialization...`)
    // this.appService.doStuff();
    setTimeout(() => this.runFetchAndSyncOrders(), 5)
  }

  // @Interval(ms('30s'))
  async runFetchAndSyncOrders() {
    try {
      if (this.lastOrdersSync != null) {
        this.fetchedRecords = await this.getOrdersSinceLastSync(
          this.lastOrdersSync,
        )
      } else {
        this.fetchedRecords = await this.getAllOrders()
      }
      this.logger.log(
        `Successfully fetched [${this.fetchedRecords.length}] order records`,
      )
      console.log(this.fetchedRecords[0])
      if (this.fetchedRecords.length > 0) {
        const convertedEntities = convertOrder(this.fetchedRecords)
        const now = new Date()
        const fetchedIds = await this.repo.syncByExternalIds(
          convertedEntities.map((externalOrder) => ({
            orderID: externalOrder.orderID,
            orderNumber: externalOrder.orderNumber,
            accountID: externalOrder.accountID,
            dueDate: externalOrder.dueDate || now,
            orderType: externalOrder.orderType,
            updated: externalOrder.timeStamp || now,
          })),
        )
        this.logger.log(`Successfully fetched orders [${fetchedIds.length}]`)
        this.lastOrdersSync = new Date()
        this.connectOrdersToAccount()
      }
    } catch (err) {
      this.logger.error(`Failed to fetch orders (${err.stack})`)
    }
  }

  async connectOrdersToAccount() {
    const success = await this.repo.connectOrdersToAccount()
  }
}
