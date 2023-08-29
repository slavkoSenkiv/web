import { User } from "./models/User";
//import axios from "axios";

//const user = new User({name: 'myname', age: 20});

/* user.set({ name: 'newname', age: 9999});
user.set({ name: 'newname1'});
console.log(user.get('name'));
console.log(user.get('age'));
 */

/* user.on('change', ()=> {console.log('change#1')});
user.on('change', ()=> {console.log('change#2')});
user.on('save', ()=> {console.log('save was triggered')});

//console.log(user);
user.trigger('change');
user.trigger('save'); */

/* axios.post('http://localhost:3000/users', {
  name: 'myname1',
  age: 21
}); */
//axios.get('http://localhost:3000/users/1'); 
//const user = new User({id: 1});
//user.set({ name: 'NEW NAME 3', age: 23});

const user = new User({name: 'new record', age: 0});
user.fetch();
user.save();
