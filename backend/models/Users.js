const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/Users')
// .then(()=>{
// 	console.log("mongodb connected");
// })
// .catch(() => console.log("failed"));


const usersSchema = new mongoose.Schema({
	email:{
		type: String,
		required: true,
		unique: true,
		trim: true
	},
	password:{
		type: String,
		required: true
	},
	userType:{
		type: String,
		required: true,
		enum: ['admin', 'user', 'superuser'],
	},
});


const Users = mongoose.model('Users', usersSchema)


module.exports = Users; 








