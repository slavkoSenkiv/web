import axios, {AxiosResponse} from "axios";

interface UserProps {
  id? : number;
  name? : string;
  age? : number;
}

const url = 'http://localhost:3000/users/'

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

  on(eventName: string, callback: Callback): void {
    let handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    let handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {return}
    handlers.forEach(callback => callback());
  }

  fetch(): void {
    const id = this.get('id');
    if (id) {
      axios.get(url+id)
        .then((response: AxiosResponse): void => {
          this.set(response.data);
        })
        .catch((error) => {
          console.error('Axios Error:', error);
        });
    }
  }
  
  save(): void {
    const id = this.get('id');
    if (id) {
      axios.put(url+id, this.data)
        .catch((error) => {
          console.error('Axios Error:', error);
        });
    } else {
      axios.post(url, this.data)
        .catch((error) => {
          console.error('Axios Error:', error);
        });
    }
  }
  
}


/* {
  "users": []
} */