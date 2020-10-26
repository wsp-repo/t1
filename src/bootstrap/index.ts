import { bootstrapDeps } from '../deps/bootstrap';
import { bootstrapTest } from '../test/test.bootstrap';

export async function bootstrap() {
  await bootstrapDeps();
  await bootstrapTest();
}
