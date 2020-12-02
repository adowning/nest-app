import {
  Repository,
  EntityRepository,
  In,
  Transaction,
  TransactionRepository,
} from 'typeorm'
import { AccountEntity } from './entities/account.entity'

@EntityRepository(AccountEntity)
export class AccountRepository extends Repository<AccountEntity> {
  findByExternalIds(externalIds: string[]): Promise<AccountEntity[]> {
    return this.find({
      where: { accountID: In(externalIds) },
    })
  }
  @Transaction()
  async syncByExternalIds(
    records: Array<Partial<AccountEntity>>,
    @TransactionRepository() repository?: AccountRepository,
  ): Promise<string[]> {
    const externalIds = records.map((record) => record.accountID)
    const actualAccounts = await repository.findByExternalIds(externalIds)
    const fetchedIds: string[] = []

    await Promise.all(
      records.map(async (record) => {
        const actualAccount = actualAccounts.find(
          (account) => account.accountID === record.accountID,
        )

        if (actualAccount) {
          actualAccount.primaryPhone = record.primaryPhone
          actualAccount.accountName = record.accountName
          actualAccount.phoneList = record.phoneList
          await repository.save(actualAccount)
          fetchedIds.push(actualAccount.accountID)
        } else {
          const account = new AccountEntity()
          for (const key in record) {
            const value = record[key]

            //optional check for properties from prototype chain
            if (record.hasOwnProperty(key)) {
              account[key] = value
              //no a property from prototype chain
            }
          }
          // account.accountID = record.accountID
          // account.primaryPhone = record.primaryPhone
          // account.accountName = record.accountName
          //   account.accountID = record.accountID
          await repository.save(account)
          fetchedIds.push(account.id.toString())
        }
      }),
    )
    return fetchedIds
  }
}
