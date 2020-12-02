import { Injectable, HttpService } from '@nestjs/common'
import { SmAccount } from './sm-account.model'
import { HttpIntegrationService } from '../common/http-integration.service'

@Injectable()
export class SmService extends HttpIntegrationService {
  constructor(private readonly httpService: HttpService) {
    super()
  }

  async findAccounts(): Promise<SmAccount[]> {
    const response = await this.httpService.get<any[]>('/accounts').toPromise()
    return response.data['items'].map((item) => new SmAccount(item))
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
