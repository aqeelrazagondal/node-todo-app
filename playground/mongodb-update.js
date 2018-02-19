// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID;
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
    if (err) {
      console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    // find one and update

    // db.collection('Todos').findOneAndUpdate({
    //   _id: new ObjectID('5a88633c737ef6cca29e0e97')
    // },{
    //   $set: {
    //     completed: true
    //   }
    // },{
    //       returnOriginal: false
    //
    // }).then((res) => {
    //   console.log(res);
    // });

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5a873c11737ef6cca29df58d')
    },{
      $set: {
        name: 'Hamza'
      },
      $inc: {
        age: 1
      }
    },{
          returnOriginal: false
    }).then((res) => {
      console.log(res);
    });

    // db.close();
});
