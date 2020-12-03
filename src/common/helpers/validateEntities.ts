import { isEmpty } from 'class-validator'
import { AccountEntity } from 'src/account/entities/account.entity'
// export type ValidateFunction<T> = ((data: unknown) => data is T)

export function convert(items: [unknown]): [AccountEntity] {
  let convertedItems: [AccountEntity]
  items.filter((account) => {
    account['phoneList'] = []
    !isEmpty(account['phone1'])
      ? account['phoneList'].push(account['phone1'])
      : null
    !isEmpty(account['phone2'])
      ? account['phoneList'].push(account['phone2'])
      : null
    !isEmpty(account['phone3'])
      ? account['phoneList'].push(account['phone3'])
      : null
    account['primaryPhone'] = account['phoneList'][0]
    account['phoneList'].length > 0
      ? convertedItems.push(account as AccountEntity)
      : null
  })
  console.log('convert items count', convertedItems.length)
  return convertedItems
}
