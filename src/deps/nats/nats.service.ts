import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

const logger = new Logger('NatsService');

@Injectable()
export class NatsService {
  constructor(@Inject('NatsClient') private readonly client: ClientProxy) {
    logger.error('NatsService [constructor]');
  }

  /**
   * Обработчик сообщений из контроллера
   */
  async test(payload: any): Promise<any> {
    console.info('onTest: ', this.client);

    // eslint-disable-next-line
    return { payload, success: true };
  }

  async send(payload?: any): Promise<any> {
    return this.client.send('test', payload);
  }
}
