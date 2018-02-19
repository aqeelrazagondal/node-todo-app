const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
// var id = '5a8b47c4009ee01c33e34c7d';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

var id = '5a8b1f5c9b8894203d7b12b2';

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));
User.findById(id).then((user) => {
  if(!user){
    return console.log('User not found');
  }
  console.log('User found by ID', user);
}).catch((e) => console.log(e));
