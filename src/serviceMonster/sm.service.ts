import { Injectable, HttpService } from '@nestjs/common'
import { SmAccount } from './sm-account.model'
import { HttpIntegrationService } from '../common/http-integration.service'

@Injectable()
export class SmService extends HttpIntegrationService {
  constructor(private readonly httpService: HttpService) {
    super()
  }
  async getTotalIndexCalls(
    collection: string,
  ): Promise<{ indexCallsList: [string?]; remainder: number }> {
    const response = await this.httpService
      .get<any[]>(`/${collection}?limit=1`)
      .toPromise()
    const total: number = response.data['count'] as number
    const indexCallsTotal = Math.floor(total / 100)
    const remainder = total - indexCallsTotal * 100

    const indexCallsList: [string?] = []
    for (let x = 0; x < indexCallsTotal; x++) {
      indexCallsList.push(x.toString())
    }

    return { indexCallsList, remainder }
  }

  async findAllAccounts(
    urlpath: string,
  ): Promise<{ items: SmAccount[]; total: number }> {
    const response = await this.httpService.get<any[]>(urlpath).toPromise()
    const items = response.data['items'].map((item) => new SmAccount(item))

    // const total = response.data['count']
    // return { items, total }
    console.log('items l = ', items.length)
    return items
  }

  async findAccounts(
    smPath: string,
  ): Promise<{ items: SmAccount[]; total: number }> {
    const response = await this.httpService.get<any[]>(smPath).toPromise()
    const items = response.data['items'].map((item) => new SmAccount(item))
    const total = response.data['count']
    return { items, total }
  }

  async findAccount(id: string): Promise<SmAccount> {
    try {
      const response = await this.httpService
        .get<any>(`/accounts/${id}`)
        .toPromise()
      return new SmAccount(response.data)
    } catch (err) {
      if (this.isNotFoundError(err)) {
        return null
      }
      throw err
    }
  }
}
