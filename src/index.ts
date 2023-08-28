import { User } from "./models/User";

const user = new User({name: 'myname', age: 20});

/* user.set({ name: 'newname', age: 9999});
user.set({ name: 'newname1'});
console.log(user.get('name'));
console.log(user.get('age'));
 */

user.on('change', ()=> {console.log('change#1')});
user.on('change', ()=> {console.log('change#2')});
user.on('save', ()=> {console.log('save was triggered')});

//console.log(user);
user.trigger('change');
user.trigger('save');


