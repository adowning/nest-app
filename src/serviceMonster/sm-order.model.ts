import { PartialFilled } from '../common/partial-filled.model'

export class SmOrder extends PartialFilled<SmOrder> {
  readonly orderID: string
  readonly orderNumber: number
  readonly accountID: string
  readonly orderType: string
  readonly timeStamp: Date
  readonly dueDate: Date
}
