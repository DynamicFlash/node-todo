
var mongoose =require('mongoose');

var Users =  mongoose.model('Users',{
	 user : {
		type: String,
		required : true,
		trim: true
	},

	email : {
		type: String,
		required: true,
		trim: true

	}
});

module.exports ={Users};