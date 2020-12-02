import { Test, TestingModule } from '@nestjs/testing'
import { AccountResolver } from '../serviceMonster/account.resolver'
import { AccountService } from '../serviceMonster/account.service'

describe('AccountResolver', () => {
  let resolver: AccountResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountResolver, AccountService],
    }).compile()

    resolver = module.get<AccountResolver>(AccountResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
