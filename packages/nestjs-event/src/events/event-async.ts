import { EventAsyncInterface } from './interfaces/event-async.interface';
import { Event } from './event';

/**
 * Abstract async event class.
 *
 * To create a custom **async** event, extend the
 * {@link EventAsync} class.
 *
 * You can override and customize the [values]{@link Event#values} getter
 * if desired. Please read the documentation for the abstract {@link Event} class
 * for the complete documentation.
 *
 * For synchronous events, see the {@link EventSync} abstract class.
 *
 * ### Example
 * ```ts
 * // event values type
 * type MyObject = {id: number, active: boolean};
 * type MyEventValues = [MyObject];
 *
 * // event class
 * class MyEvent extends EventAsync<MyEventValues> {}
 *
 * // create an event
 * const myEvent = new MyEvent({id: 1234, active: true});
 * ```
 */
export abstract class EventAsync<V = undefined, R = V>
  extends Event<V, Promise<R>>
  implements EventAsyncInterface<V, R> {}
