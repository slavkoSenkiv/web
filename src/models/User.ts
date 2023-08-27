/* interface UserProps {
  name: string;
  age: number;
}


export class User {
  constructor(private data: UserProps) {}

  get(propName: string): (number | string) {
    return this.data[propName];
  }
} */

/* interface UserProps {
  name?: string;
  age?: number;
}


export class User {
  constructor(private data: UserProps) {}

  get<K extends keyof UserProps>(propName: K): number | string | void {
    return this.data[propName];
  }
} */

interface UserProps {
  name: string;
  age: number;
  [key: string] : string | number;
}


export class User {
  constructor(private data: UserProps) {}

  get(propName: string): (number | string) {
    return this.data[propName];
  }
}