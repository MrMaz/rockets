import { EVENT_MODULE_EVENT_KEY_PREFIX } from '../event-constants';
import { EventValues } from '../event-types';
import { EventInterface } from './interfaces/event.interface';

/**
 * Abstract event class.
 *
 * To create a custom event, extend the {@link Event} class.
 *
 * You must implement one of the {@link EventSyncInterface} or {@link EventAsyncInterface}
 * interfaces.
 *
 * There are additional abstract classes available which have implemented the
 * sync and async event types for your convenience. They are {@link EventSync}
 * and {@link EventAsync}.
 *
 * ### Example
 * ```ts
 * // event values type
 * type MyObject = {id: number, active: boolean};
 * type MyEventValues = [MyObject];
 *
 * // event class
 * class MyEvent extends Event<MyEventValues>
 *   implements EventSyncInterface<MyEventValues>
 * {}
 *
 * // create an event
 * const myEvent = new MyEvent({id: 1234, active: true});
 * ```
 */
export abstract class Event<V extends EventValues = EventValues>
  implements EventInterface<V>
{
  /**
   * @private
   */
  expectsReturnOf: void | Promise<V>;

  /**
   * Event key
   */
  static get key(): string {
    return `${EVENT_MODULE_EVENT_KEY_PREFIX}${this.name}`;
  }

  /**
   * Event key
   */
  get key(): string {
    return `${EVENT_MODULE_EVENT_KEY_PREFIX}${this.constructor.name}`;
  }

  /**
   * All values that were passed to the constructor.
   */
  private _values: V;

  /**
   * Constructor
   *
   * @param {V} values Array of values to emit when the event is dispatched.
   */
  constructor(...values: V) {
    this._values = values;
  }

  /**
   * Returns all values that were passed to the constructor.
   */
  get values(): V {
    return this._values;
  }
}
