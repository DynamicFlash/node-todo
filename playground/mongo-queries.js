const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/users')

 var id ='5aad2dc04d57de1ce449d86a';

// if(!ObjectId.isValid(id)){
// 	return console.log('Id not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos)=>{
// 	console.log('Todos',todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo)=>{
// 	console.log('Todo',todo);
// });

// Todo.findById(id).then((todo)=>{

// 	if(!todo){
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo by Id',todo);
// }).catch((e)=> console.log(e));


Users.findById(id).then((user)=>{

	if(!user){
		return console.log('no user');
	}
	
	if(!user.user)
	{
		return console.log(`no username for ${user.email}`);
	}
	console.log(user);
},(err)=>{
	console.log(err.message);
})