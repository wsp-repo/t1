import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';

import { NatsModule } from './nats.module';

export async function bootstrapNats() {
  const app = await NestFactory.createMicroservice(NatsModule, {
    options: { url: 'nats://localhost:4222' },
    transport: Transport.NATS,
  });

  return app.listenAsync();
}
