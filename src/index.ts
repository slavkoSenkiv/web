import { User } from "./models/user";

const user = new User({name: 'slav', age: 28});

console.log(user);

console.log(user.get('name'));
console.log(user.get('age'));

user.set({'age': 20});
console.log(user.get('age'));

user.on('click', ()=>console.log('click made 1'));
user.on('click', ()=>console.log('click made 2'));
user.on('save', ()=>console.log('data saved 1'));
console.log(user);

user.trigger('click');
user.trigger('save');


