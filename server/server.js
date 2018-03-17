var express =require('express');
var bodyParser =require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/users');

var app =express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
	
	var newtodo = new Todo({
		text: req.body.text
	})

	newtodo.save().then((doc)=>{
		res.send(JSON.stringify(doc, undefined, 2))
	},(err)=>{
		res.status(400).send(err);
	})
});

app.listen(3000,()=>{
	console.log('started on port 3000');
})