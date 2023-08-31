import axios from "axios";

interface UserProps {
  id? : number;
  name? : string;
  age? : number;
}

type Callback = () => void;

export class User {

  events: {[key: string]: Callback[]} = {};

  constructor (private data: UserProps) {}

  get<K extends keyof UserProps>(propertyName: K): number | string | void {
    return this.data[propertyName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string): void {
    let handlers = this.events[eventName] || [];
    
  }

  trigger() {

  }

  fetch() {

  }

  save() {

  }
}