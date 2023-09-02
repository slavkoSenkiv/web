
interface UserProps {
  id? : number;
  name? : string;
  age? : number;
}

type Callback = () => void;

export class User {

  constructor(private data: UserProps) {};

  events: {[eventName: string]: Callback[]} = {};

  get<K extends keyof UserProps>(propName: K): number | string | void {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    let handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    let handlers = this.events[eventName];
    if (!handlers || handlers.length === 0){return};
    handlers.forEach(callback => callback());
  }


}