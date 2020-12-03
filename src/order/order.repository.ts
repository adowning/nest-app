import { isDefined, isEmpty } from '../common/helpers/is-defined'
import {
  Repository,
  EntityRepository,
  In,
  Transaction,
  TransactionRepository,
} from 'typeorm'
import { OrderEntity } from './entities/order.entity'
import { AccountRepository } from 'src/account/account.repository'

@EntityRepository(OrderEntity)
export class OrderRepository extends Repository<OrderEntity> {
  findByExternalIds(externalIds: string[]): Promise<OrderEntity[]> {
    return this.find({
      where: { orderID: In(externalIds) },
    })
  }
  @Transaction()
  async connectOrdersToAccount(
    @TransactionRepository() repository?: OrderRepository,
    @TransactionRepository() accountRepo?: AccountRepository,
  ) {
    const currentOrders = await repository.find()
    for (const order of currentOrders) {
      const accountID = order.accountID
      const account = await accountRepo.findOne({
        where: { accountID: accountID },
      })
      if (!isEmpty(account)) {
        order.account = account
        await repository.save(order)
        if (!account.orders.includes(order)) {
          account.orders.push(order)
          await accountRepo.save(account)
        }
        // this.logger.error(`Updated (${err.stack})`)
      }
    }
  }
  @Transaction()
  async syncByExternalIds(
    records: Array<Partial<OrderEntity>>,
    @TransactionRepository() repository?: OrderRepository,
  ): Promise<string[]> {
    const externalIds = records.map((record) => record.orderID)
    const actualOrders = await repository.findByExternalIds(externalIds)
    const fetchedIds: string[] = []

    await Promise.all(
      records.map(async (record) => {
        const actualOrder = actualOrders.find(
          (order) => order.orderID === record.orderID,
        )
        if (actualOrder) {
          actualOrder.orderNumber = record.orderNumber
          actualOrder.orderID = record.orderID
          actualOrder.accountID = record.accountID
          actualOrder.orderType = record.orderType
          actualOrder.updatedBy = record.updatedBy
          await repository.save(actualOrder)
          fetchedIds.push(actualOrder.orderID)
        } else {
          const order = new OrderEntity()
          for (const key in record) {
            const value = record[key]

            //optional check for properties from prototype chain
            if (record.hasOwnProperty(key)) {
              if (isDefined(record[key]) && !isEmpty(record[key])) {
                order[key] = value
              } else {
                delete order[key]
              }
              //no a property from prototype chain
            }
          }
          // console.log(order)
          await repository.save(order)
          fetchedIds.push(order.id.toString())
        }
      }),
    )
    return fetchedIds
  }
}
