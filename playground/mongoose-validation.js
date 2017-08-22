const Date = require('./Date');
var {mongoose} = require('./db/mongoose');


    var Todo = mongoose.model('Todo', {
      text:{
        type: String
        required: true,
        minlength:1,
        trim: true
      },
      completed:{
        type: Boolean,
        default: false
      }, completedAt:{
        type: String,
        default: null
      }
    });

    var user = new User({
      email: 'Ismaelomar.work@gmail.com'
    });

    user.save().then((docs) => {
      console.log('Saved todo:', docs);
    }, (e) => {
      console.log('Unable to save user', e);
    });

    var newTodo = Todo({
      // text: 'feed the dog',
      // completed: false,
      // completedAt:Date.getFullDate()
    });



    newTodo.save().then((docs) => {
      console.log('Saved todo:', docs);
    }, (err) => {
      console.log('Unable to save todo', err);
    });
