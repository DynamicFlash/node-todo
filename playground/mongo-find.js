
const {MongoClient, ObjectID} =require('mongodb');




MongoClient.connect('mongodb://localhost:27017/',(err, client)=>{

	if(err){
		console.log('unable to connect to mongodb');
		return client.close()
	}

	console.log('connected');
	var db = client.db('TodoApp');

	// db.collection('Todos').find({
	// 	_id: new ObjectID('5aabb924e2233728e4910c92')
	// }).toArray().then((docs)=>{

	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs,undefined, 2));
	// },(err)=>{
	// 	console.log('Unable to fetch todos',err);
	// });
	

	db.collection('Users').find({name : 'Aldrin'}).count().then((count)=>{

		console.log(`Todos count: ${count}`);

		db.collection('Users').find({name : 'Aldrin'}).toArray().then((docs)=>{

		 
		console.log(JSON.stringify(docs,undefined, 2));
	},(err)=>{
		console.log('Unable to fetch todos',err);
	});
	

	},(err)=>{
		console.log('Unable to fetch todos',err);
	});


	// client.close();

})