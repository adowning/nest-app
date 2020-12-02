import { Module, HttpModule } from '@nestjs/common'
import { SmService } from './sm.service'
import { config } from '../config'

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: config.smTimeout,
        baseURL: config.smUrl,
        headers: {
          Authorization: config.smApiKey,
        },
      }),
    }),
  ],
  providers: [SmService],
  exports: [SmService],
})
export class SmModule {}
