
var mongoose = require('mongoose');

mongoose.Promise =global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{

	text : {
		type : String
	},
	completed : {
		type : Boolean
	},
	completedAt : {
		type : String
	}
});

var newTodo = new Todo({
	text : 'working with mongoose',
	completed : true,
	completedAt :`${new Date().getHours()} : ${new Date().getMinutes()}`
}) ;

newTodo.save().then((doc)=>{
  console.log('saved Todo' , doc);
},(err)=>{
	console.log(err);
});

