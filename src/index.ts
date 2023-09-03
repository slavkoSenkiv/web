import { User } from "./models/user";
const user = new User({id: 1, name: 'Slav', age: 28});
user.fetch();
user.save();

/* console.log(user);
console.log(user.get('age'));   
user.set({age: 30});
console.log(user);
user.on('click', ()=>console.log('click here'));
console.log(user);
user.trigger('click'); 
 */
