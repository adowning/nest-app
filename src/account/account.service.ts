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

export class AccountService extends NoOpQueryService<
  AccountDTO,
  AccountInputDTO
> {
  constructor(
    @InjectQueryService(AccountEntity)
    private readonly queryService: QueryService<AccountEntity>,
    private readonly smService: SmService,
    private readonly accountRepository: AccountRepository,
  ) {
    super()
  }

  async fetch(): Promise<string[]> {
    const _externalAccounts = await this.smService.findAccounts()
    // externalAccounts = externalAccounts.filter((account) => {
    //   for (const key in account) {
    //     const value = account[key]
    //     const valueType = typeof value
    //     //optional check for properties from prototype chain
    //     if (account.hasOwnProperty(key)) {
    //       //no a property from prototype chain
    //     } else {
    //       //property from protytpe chain
    //     }
    //   }
    // })
    let externalAccounts: SmAccount[] = []
    externalAccounts = _externalAccounts.filter((account) => {
      account.phoneList = []
      typeof account.phone1 === 'string'
        ? account.phoneList.push(account.phone1)
        : null
      typeof account.phone2 === 'string'
        ? account.phoneList.push(account.phone2)
        : null
      typeof account.phone3 === 'string'
        ? account.phoneList.push(account.phone3)
        : null
      return account.phoneList.length > 0 ? account : null
    })
    return await this.accountRepository.syncByExternalIds(
      externalAccounts.map((externalAccount) => ({
        accountID: externalAccount.accountID.toString(),
        accountName: externalAccount.accountName,
        phoneList: externalAccount.phoneList,
        primaryPhone: externalAccount.phoneList[0],
      })),
    )
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

  // async fetchByExternalId(externalId: string): Promise<string> {
  //   const externalUser = await this.smService.findAccount(externalId)
  //   if (!externalUser) {
  //     throw new InvalidExternalIdException()
  //   }
  //   const [id] = await this.accountRepository.syncByExternalIds([
  //     {
  //       accountID: externalUser.accountID.toString(),
  //       accountName: externalUser.accountName,
  //       phone1: externalUser.phone1,
  //     },
  //   ])

  //   return id
  // }
}
