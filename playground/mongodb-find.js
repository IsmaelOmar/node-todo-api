// const MongoClient = require ('mongodb').MongoClient;
const {MongoClient , ObjectID} = require ('mongodb');

// var obj = new ObjectID();
// console.log(obj);

//How to use curly braces for variables
// var user = {name: 'Andrew', age: 25};
// var {name} = user;
// console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to the MongoDB server');
  }
  console.log('connected to the MongoDB server');

    // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //   console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find({_id: new ObjectID("599aaaedbe63222a42d70e96")}).toArray().then((docs) => {
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //   console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //   console.log(`Todos count: ${count}`);
    // }, (err) => {
    //   console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'Ismael Omar'}).toArray().then((docs) => {
      console.log('Users:');
      console.log(docs);
    }, (err) => {
      console.log('Unable to fetch users', err);
    });

   db.close();
});
