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

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('599ab3db2eb05c2cf45730e2')
  }, {
    $set:{
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  });

   db.close();
});
