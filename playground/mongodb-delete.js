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
    //deleteMany
    // db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((results) => {
    //   console.log('This item has been deleted');
    //   console.log(results.result);
    // });
    // //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //   console.log(result.result);
    // });

    //findOneAndDelete
    // db.collection('Users').findOneAndDelete({name: 'Scott Summers'}).then((result) => {
    //   console.log(result);
    // });


    db.collection('Users').deleteMany({name: 'Ismael Omar'}).then((result) => {
      console.log(`Deleted Successfully: ${result.result}`);
    });

    db.collection('Users').findOneAndDelete({"_id" : new ObjectID("599abc937195522d76d35a3d")}).then((result) => {
      console.log(result);
    });


   db.close();
});
