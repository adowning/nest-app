import { CodedException } from './coded.exception'

export class InvalidExternalIdException extends CodedException {
  constructor() {
    super('INVALID_EXTERNAL_ID', 'Invalid external id')
  }
}
