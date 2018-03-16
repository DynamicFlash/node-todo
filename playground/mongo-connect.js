
//const MongoClient =require('mongodb').MongoClient;

const {MongoClient, ObjectID} =require('mongodb');

// var obj = new ObjectID();

// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/',(err, client)=>{

	if(err){
		console.log('unable to connect to mongodb');
		return client.close()
	}

	console.log('connected');
	var db = client.db('TodoApp');

	// db.collection('Todos').insertOne({

	// 	name :" Aldrin",
	// 	date : " 16-03-2018",
	// 	time :  "13:57"

	// },(err,result)=>{
	// 	if(err){
	// 		console.log(`hiccup : ${err}`)
	// 		return db.close()
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2))
	// })
	// 
	
	db.collection('Users').insertOne({

		name : "Aldrin",
		date :"16-03-2018",
		time : "14:31 "

	},(err ,result)=>{
		if(err){
			return console.log('unable to insert user',err);
		}

		console.log(result.ops[0]._id.getTimestamp());
	})

	client.close();

})