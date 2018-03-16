
const {MongoClient, ObjectID} =require('mongodb');




MongoClient.connect('mongodb://localhost:27017/',(err, client)=>{

	if(err){
		console.log('unable to connect to mongodb');
		return client.close()
	}

	console.log('connected');
	var db = client.db('TodoApp');

	//deleteMany
	
	// db.collection('Users').deleteMany(
	// 	{name:"Aldrin"}).then((result)=>{
	// 	console.log(result.result);
	// });
	
	//deleteOne
	
	db.collection('Users').deleteOne(
		{_id:new ObjectID('5aabb56cd5ae4f33a8447847')}).then((result)=>{
		console.log(result.result);
	});
	
	//findOneAndDelete
	// db.collection('Todos').findOneAndDelete(
	// 	{completed:true}).then((result)=>{
	// 	console.log(result);
	// });


	// client.close();

})