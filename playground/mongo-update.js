
const {MongoClient, ObjectID} =require('mongodb');




MongoClient.connect('mongodb://localhost:27017/',(err, client)=>{

	if(err){
		console.log('unable to connect to mongodb');
		return client.close()
	}

	console.log('connected');
	var db = client.db('TodoApp');

	// db.collection('Todos').findOneAndUpdate(
	// 	{task:" get node done"},
	// 	{ $set: { completed : true}},
	// 		{returnOriginal: false
	// }).then((result)=>{
	// 	console.log(result)
	// })


	db.collection('Users').findOneAndUpdate(
		{name:'gen'},
		{ $currentDate: { date : {$type: "date"} , time : {$type:'timestamp'} } },
			{returnOriginal: false
	}).then((result)=>{
		console.log(result)
	})


	// client.close();

})