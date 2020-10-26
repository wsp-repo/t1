import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { NatsService } from './nats.service';
import { NatsController } from './nats.controller';

@Module({
  controllers: [NatsController],
  exports: [NatsService],
  imports: [
    ClientsModule.register([
      {
        name: 'NatsClient',
        options: { url: 'nats://localhost:4222' },
        transport: Transport.NATS,
      },
    ]),
  ],
  providers: [NatsService],
})
export class NatsModule {}
