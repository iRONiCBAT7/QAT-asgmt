const bcrypt = require('bcrypt');
const Users =  require('../models/Users')

const loginUser = async (req, res)=>{
	console.log(req.body);
	const {email, password} = req.body;

	const user = await Users.findOne({email });

	try{

    const match = await bcrypt.compare(password, user.password);
     if(match) {
		res.status(200).json({validUser: true, userType: user.userType})

	}else {
		console.log("invalidCredentials")
		res.status(200).json({validUser: false})
	}
	
	}catch(e){
			console.log("invalidCredentials")
		return res.status(200).json({validUser: false})
	}

   

}


const signupUser = async (req, res)=>{
	console.log(req.body);
	const {email, password, userType} = req.body;
	const user = await Users.find({email})
	console.log(user)
	if(user.length === 0){
		try{
		const saltRounds = 10;
		const salt = bcrypt.genSaltSync(saltRounds);
		const hash = bcrypt.hashSync(password, salt);
		const user = await new Users({email, password: hash ,userType})
		await user.save()
		res.status(200).json({data: "added"})
		console.log(user)
		}catch(e){
			console.log(e)
			res.status(200).json({data: "invalid"})
		}
	}else {
		console.log("duplicate")
		res.status(200).json({data: "duplicate"})
	}
}




// const dashboard = (req, res)=>{

// 	const {userType} = req.query;
// 	console.log(userType)
	
// 	res.status(200).json({userType: userType})
	
// }





module.exports = {loginUser, signupUser}








