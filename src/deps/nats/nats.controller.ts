import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { NatsService } from './nats.service';

const logger = new Logger('NatsController');

@Controller()
export class NatsController {
  constructor(private service: NatsService) {
    logger.error('NatsController [constructor]');
  }

  @MessagePattern('test')
  async test(@Payload() payload: any): Promise<any> {
    return this.service.test(payload);
  }
}
