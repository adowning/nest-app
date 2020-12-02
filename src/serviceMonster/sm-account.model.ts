import { PartialFilled } from '../common/partial-filled.model'

export class SmAccount extends PartialFilled<SmAccount> {
  readonly accountID: number
  readonly accountName: string
  readonly phone1: string
  readonly phone2: string
  readonly phone3: string
  phoneList?: [string?]
}
