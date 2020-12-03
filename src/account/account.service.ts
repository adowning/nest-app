import {
  DeepPartial,
  DeleteManyResponse,
  Filter,
  InjectQueryService,
  NoOpQueryService,
  Query,
  QueryService,
  UpdateManyResponse,
} from '@nestjs-query/core'
import { SmService } from 'src/serviceMonster/sm.service'
import { AccountRepository } from './account.repository'
import { AccountInputDTO } from './dto/account-input.dto'
import { AccountDTO } from './dto/account.dto'
import { AccountEntity } from './entities/account.entity'
import { InvalidExternalIdException } from 'src/common/exceptions/invalid-external-id.exception'
import { SmAccount } from 'src/serviceMonster/sm-account.model'
import { isDefined } from 'src/common/helpers'
import { batchCall } from 'src/common/helpers/batchCall'

export class AccountService extends NoOpQueryService<
  AccountDTO,
  AccountInputDTO
> {
  private firstRun: boolean
  private total: number
  private accountsList: [string?]
  private urls: [string?]
  constructor(
    @InjectQueryService(AccountEntity)
    private readonly queryService: QueryService<AccountEntity>,
    private readonly smService: SmService,
    private readonly accountRepository: AccountRepository,
  ) {
    super()
    this.firstRun = true
    this.total = 0
    this.accountsList = []
    this.urls = []
  }

  createOne({
    accountName: accountName,
  }: AccountInputDTO): Promise<AccountDTO> {
    return this.queryService.createOne({ accountName })
  }
  createMany(items: AccountInputDTO[]): Promise<AccountDTO[]> {
    const newItems = items.map(({ accountName: accountName }) => ({
      accountName,
    }))
    return this.queryService.createMany(newItems)
  }

  query(query: Query<AccountDTO>): Promise<AccountDTO[]> {
    return this.queryService.query(query)
  }

  findById(id: string | number): Promise<AccountDTO | undefined> {
    return this.queryService.findById(id)
  }

  getById(id: string | number): Promise<AccountDTO> {
    return this.queryService.getById(id)
  }

  updateMany(
    update: DeepPartial<AccountDTO>,
    filter: Filter<AccountDTO>,
  ): Promise<UpdateManyResponse> {
    return this.queryService.updateMany(update, filter)
  }

  updateOne(
    id: string | number,
    update: DeepPartial<AccountDTO>,
  ): Promise<AccountDTO> {
    return this.queryService.updateOne(id, update)
  }

  deleteMany(filter: Filter<AccountDTO>): Promise<DeleteManyResponse> {
    return this.queryService.deleteMany(filter)
  }

  deleteOne(id: string | number): Promise<AccountDTO> {
    return this.queryService.deleteOne(id)
  }
}
