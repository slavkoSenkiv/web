import axios from "axios";

interface UserProps {
  id? : number;
  name? : string;
  age? : number;
}

export class User {
  constructor (private data: UserProps) {}

  get<K extends keyof UserProps>(propName: K): string | number | void {
    return this.data[propName];
  }

  set() {

  }

  on() {

  }

  trigger() {

  }

  fetch() {

  }

  save() {

  }
}