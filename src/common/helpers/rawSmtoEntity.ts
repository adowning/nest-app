import { isDefined, isEmpty } from 'class-validator'

export const convertAccount = (items: [any?]): any[] => {
  const convertedItems: any[] = items.filter((account) => {
    account.phoneList = []
    !isEmpty(account.phone1) ? account.phoneList.push(account.phone1) : null
    typeof account.phone2 === 'string'
      ? account.phoneList.push(account.phone2)
      : null
    typeof account.phone3 === 'string'
      ? account.phoneList.push(account.phone3)
      : null
    account.primaryPhone = account.phoneList[0]
    return account.phoneList.length > 0 ? account : false
  })
  console.log(`converted accounts count`, convertedItems.length)
  return convertedItems
}

export const convertOrder = (items: [any?]): any[] => {
  const convertedItems: any[] = items.filter((order) => {
    if (!isEmpty(order.timeStamp) || isDefined(order.timeStamp)) {
      order.updated = order.timeStamp
      delete order.timeStamp
    } else {
      delete order.timeStamp
    }
    if (!isEmpty(order.userName) || isDefined(order.userName)) {
      order.updatedBy = order.userName
    }
    if (isEmpty(order.dueDate) || !isDefined(order.dueDate)) {
      const date = new Date()
      order.dueDate = date.setDate(order.dateCreated + 21)
    }
    return typeof order.orderNumber !== 'number' &&
      typeof order.accountID !== 'string' &&
      typeof order.dueDate !== 'string' &&
      typeof order.updated !== 'string' &&
      typeof order.orderType !== 'string' &&
      typeof order.orderID !== 'string'
      ? false
      : order
  })
  console.log(`converted orders count`, convertedItems.length)
  return convertedItems
}
