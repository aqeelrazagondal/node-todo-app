// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID;
console.log(obj);

// Object destructuring
// var user = {name: 'Aqeel', age: 25};
// var {name} =user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
    if (err) {
      console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //   text: 'Something to do',
    //   completed: false
    // }, (err, result) => {
    //   if (err) {
    //     return console.log('Unable to insert todo', err);
    //   }
    //
    //   console.log(JSON.stringify(result.ops, undefined, 2));
    // });



    //insert new doc into Users (name, age, loc)
    // db.collection('Users').insertOne({
    //   name: 'Aqeel Raza',
    //   age: 25,
    //   loc: 'Islamabad'
    // }, (err, result) => {
    //   if (err) {
    //     return console.log('Unable to insert User collection', err);
    //   }
    //   console.log(result.ops[0]._id.getTimestamp());
    // });
    db.close();
});
