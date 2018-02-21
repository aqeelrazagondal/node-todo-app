var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');
//mongoose.connect('mongodb://aqeel:raza@ds245218.mlab.com:45218/node-todo-app');

module.exports = {mongoose};
