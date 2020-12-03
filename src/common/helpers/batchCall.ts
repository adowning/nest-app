import HttpService from '@nestjs/common'
import { SmService } from 'src/serviceMonster/sm.service'
const options = {
  headers: {
    Authorization: 'Bearer x',
  },
}

export const batchCall = async (batchSize, array, service: SmService) => {
  const results = []
  let result = []
  const clients = [...array]
  while (clients.length) {
    const chunk = clients.splice(0, batchSize)
    result = await Promise.all(
      chunk.map(async (element) => {
        const { items, total } = await service.findAllAccounts(element)
        return items
      }),
    )
    results.concat(...result)
    console.log('results length ', results.length)
  }
  return results
}
