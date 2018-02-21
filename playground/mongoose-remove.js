const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//   console.log(res);
// });

//Todo.findOneAndRemove()
Todo.findByIdAndRemove('5a8dc48851e87e904890003d').then((todo) => {
  console.log(todo);
});
