// const MongoClient = require ('mongodb').MongoClient;
const {MongoClient , ObjectID} = require ('mongodb');

// var obj = new ObjectID();
// console.log(obj);


// var user = {name: 'Andrew', age: 25};
// var {name} = user;
// console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to the MongoDB server');
  }
  console.log('connected to the MongoDB server');

    // db.collection('Todos').insertOne({
    //   text:'Something to do',
    //   completed: false
    // }, (err, results) => {
    //   if(err){
    //     return console.log('Unable to insert todo', err);
    //   }
    //   console.log(JSON.stringify(results.ops, undefined, 2));
    // });
    // db.collection('Users').insertOne({
    //   name: 'Ismael Omar',
    //   age: 22,
    //   location: 'London'
    // }, (err, result) => {
    //   if(err){
    //     return console.log('Unable to connect with the server', err);
    //   }
    //   console.log(result.ops[0]._id.getTimestamp());
    // });






   db.close();
});
