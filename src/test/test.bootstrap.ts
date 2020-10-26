import { NestFactory } from '@nestjs/core';

import { TestModule } from './test.module';

/**
 * Инициализировать сервис (с REST-модулем)
 */
export async function bootstrapTest() {
  const app = await NestFactory.create(TestModule);
  return app.listenAsync(12345);
}
