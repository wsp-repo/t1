import { bootstrapNats } from './nats/nats.bootstrap';

export async function bootstrapDeps() {
  await bootstrapNats();
}
