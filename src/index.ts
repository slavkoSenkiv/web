import { User } from "./models/User";

const user = new User({name: 'Slav', age: 28});
console.log(user);
console.log(user.get('age'));   
user.set({age: 30});
console.log(user);
user.on('click', ()=>console.log('click here'));
console.log(user);
user.trigger('click');