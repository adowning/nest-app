import ms from 'ms'
import { Interval, NestSchedule } from 'nest-schedule'
import { Injectable, Logger, OnModuleInit } from '@nestjs/common'
import { AccountService } from './account.service'
import { SMApi } from 'src/common/helpers/smApi'
import { AccountRepository } from './account.repository'
import { convertAccount, convertOrder } from 'src/common/helpers/rawSmtoEntity'
import { SmAccount } from 'src/serviceMonster/sm-account.model'

@Injectable()
export class AccountSchedule extends NestSchedule {
  private readonly logger = new Logger(AccountSchedule.name)
  private readonly getAllAccounts = new SMApi().getAllAccounts
  private readonly getAccountsSinceLastSync = new SMApi()
    .getAccountsSinceLastSync
  private lastSync: Date = null
  private fetchedRecords: [SmAccount?]
  constructor(
    private readonly accountService: AccountService,
    private readonly repo: AccountRepository,
  ) {
    super()
  }

  // onModuleInit() {
  //   console.log(`runFetchAndSyncAccounts Initialization...`)
  //   // this.appService.doStuff();
  //   this.runFetchAndSyncAccounts()
  // }

  // @Interval(ms('30s'))
  async runFetchAndSyncAccounts() {
    try {
      if (this.lastSync != null) {
        this.fetchedRecords = await this.getAccountsSinceLastSync(this.lastSync)
      } else {
        this.fetchedRecords = await this.getAllAccounts()
      }
      this.logger.log(
        `Successfully fetched [${this.fetchedRecords.length}] account records`,
      )
      if (this.fetchedRecords.length > 0) {
        const convertedEntities = convertAccount(this.fetchedRecords)

        const fetchedIds = await this.repo.syncByExternalIds(
          convertedEntities.map((externalAccount) => ({
            accountID: externalAccount.accountID.toString(),
            accountName: externalAccount.accountName,
            phoneList: externalAccount.phoneList,
            primaryPhone: externalAccount.phoneList[0],
          })),
        )
        this.logger.log(`Successfully fetched accounts [${fetchedIds.length}]`)
        this.lastSync = new Date()
      }
    } catch (err) {
      this.logger.error(`Failed to fetch accounts (${err.stack})`)
    }
  }
}
