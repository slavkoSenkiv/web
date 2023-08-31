import { User } from "./models/user";

const user = new User({name: 'slav', age: 28});

console.log(user);

console.log(user.get('name'));
console.log(user.get('age'));

user.set({'age': 20});
console.log(user.get('age'));

