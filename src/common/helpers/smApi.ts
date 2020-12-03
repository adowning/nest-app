import { HttpClient, SMResponse } from './axios'
import { SmAccount } from '../../serviceMonster/sm-account.model'
import { SmOrder } from 'src/serviceMonster/sm-order.model'

function isEmpty(val) {
  return val === undefined || val == null || val.length <= 0 ? true : false
}

export class SMApi extends HttpClient {
  public constructor() {
    super()
  }

  public getAccountsSinceLastSync = async (
    lastSync: Date,
  ): Promise<[SmAccount?]> => {
    let batchedResults: [any?] = []
    const count: number = await this.getUpdatedCount(lastSync, 'accounts')
    if (count < 1) {
      console.log('nothing to update')
      return []
    }
    const urlList: [string?] = []
    const pagesToCall: number = Math.floor(count / 100)
    for (let x = 0; x < pagesToCall + 1; x++) {
      urlList.push(
        `/accounts?wField=timeStamp&wValue=${lastSync.toISOString()}&wOperator=gt`,
      )
    }
    if (count > 100) {
      batchedResults = await this.batchCall(
        100,
        urlList,
        this.instance.get,
        'accounts',
      )
      return batchedResults
    } else {
      const results: [any?] = []
      const res = await this.instance.get(urlList[0])
      if (!isEmpty(res.data['items'])) {
        const items = res.data['items'].map((item) => new SmAccount(item))
        results.push(...items)
      }
      batchedResults = results
      return batchedResults
    }
  }
  public getOrdersSinceLastSync = async (
    lastSync: Date,
  ): Promise<[SmOrder?]> => {
    let batchedResults: [any?] = []
    const count: number = await this.getUpdatedCount(lastSync, 'orders')
    if (count < 1) {
      console.log('nothing to update')
      return []
    }
    const urlList: [string?] = []
    const pagesToCall: number = Math.floor(count / 100)
    for (let x = 0; x < pagesToCall + 1; x++) {
      urlList.push(
        `/orders?wField=timeStamp&wValue=${lastSync.toISOString()}&wOperator=gt`,
      )
    }
    if (count > 100) {
      batchedResults = await this.batchCall(
        100,
        urlList,
        this.instance.get,
        'orders',
      )
      return batchedResults
    } else {
      const results: [any?] = []
      const res = await this.instance.get(urlList[0])
      if (!isEmpty(res.data['items'])) {
        const items = res.data['items'].map((item) => new SmOrder(item))
        results.push(...items)
      }
      batchedResults = results
      return batchedResults
    }
  }

  public getAllAccounts = async (): Promise<[SmAccount?]> => {
    const count: number = await this.getCount('accounts')
    const urlList: [string?] = []
    const pagesToCall: number = Math.floor(count / 100)
    for (let x = 1; x < pagesToCall + 1; x++) {
      urlList.push(`/accounts?pageIndex=${x.toString()}&limit=100`)
    }
    const batchedResults: [any?] = await this.batchCall(
      100,
      urlList,
      this.instance.get,
      'accounts',
    )
    return batchedResults
  }
  public getAllOrders = async (): Promise<[SmOrder?]> => {
    const count: number = await this.getCount('orders')
    const urlList: [string?] = []
    const pagesToCall: number = Math.floor(count / 100)
    for (let x = 1; x < pagesToCall + 1; x++) {
      urlList.push(`/orders?pageIndex=${x.toString()}&limit=100`)
    }
    const batchedResults: [any?] = await this.batchCall(
      100,
      urlList,
      this.instance.get,
      'orders',
    )
    return batchedResults
  }

  public getCount = async (className: string): Promise<number> => {
    const response: any = await this.instance.get<any[]>(
      `/${className}?limit=1`,
    )
    return response.data.count as number
  }
  public getUpdatedCount = async (
    lastSync: Date,
    className: string,
  ): Promise<number> => {
    const response: any = await this.instance.get<any[]>(
      `/${className}?limit=1&wField=timeStamp&wValue=${lastSync.toISOString()}&wOperator=gt`,
    )
    return response.data.count as number
  }

  public batchCall = async (
    batchSize,
    array,
    func,
    className,
  ): Promise<[any?]> => {
    const results: [any?] = []
    const clients = [...array]
    while (clients.length) {
      const chunk = clients.splice(0, batchSize)
      await Promise.all(
        chunk.map(async (element) => {
          const res = await func(element)
          if (!isEmpty(res.data['items'])) {
            if (className == 'accounts') {
              const items = res.data['items'].map((item) => new SmAccount(item))
              results.push(...items)
            }
            if (className == 'orders') {
              const items = res.data['items'].map((item) => new SmOrder(item))
              results.push(...items)
            }
          }
        }),
      )
    }
    return results
  }
}
