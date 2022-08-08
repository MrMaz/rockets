import { EventInterface } from './events/interfaces/event.interface';
import { EventAsyncInterface } from './events/interfaces/event-async.interface';
import { EventExpectsReturnOfInterface } from './events/interfaces/event-expects-return-of.interface';

export type EventPayload<V> = V;

export type EventInstance<E> = E extends EventInterface<infer V, infer R>
  ? EventInterface<V, R>
  : never;

export type EventAsyncInstance<E> = E extends EventAsyncInterface<
  infer V,
  infer R
>
  ? EventAsyncInterface<V, R>
  : never;

export type EventReturnType<E> = E extends EventExpectsReturnOfInterface<
  infer R
>
  ? R
  : never;

export type EventReturnPayload<E, R = EventReturnType<E>> = R extends Promise<
  infer Z
>
  ? Z
  : R;
