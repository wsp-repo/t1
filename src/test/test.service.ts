import { Injectable } from '@nestjs/common';

import { NatsService } from '../deps';

@Injectable()
export class TestService {
  constructor(private readonly nats: NatsService) {
    console.info(`TestService [constructor] ${this.nats ? 1 : 0}`);
  }
}
