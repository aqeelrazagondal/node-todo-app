// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID;
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
    if (err) {
      console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // delete many
    // db.collection('Todos').deleteMany({text: 'Something to do'}).then((result) => {
    //   console.log(result);
    // });
    // delete one
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((res) => {
    //   console.log(res);
    // });

    // find one delete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
    //   console.log(res);
    // });

    db.collection('Users').findOneAndDelete({
      _id: new ObjectID("5a8ae12a737ef6cca29e2c7f")
    }).then((res) => {
      console.log(JSON.stringify(res, undefined, 2));
    });
    // db.close();
});
