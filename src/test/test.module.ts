import { Module } from '@nestjs/common';

import { NatsModule } from '../deps';

import { TestService } from './test.service';

@Module({
  imports: [NatsModule],
  providers: [TestService],
})
export class TestModule {}
