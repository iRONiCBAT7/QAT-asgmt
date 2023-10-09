const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const userRoutes = require('./routes/users')
const dbUrl = "mongodb://127.0.0.1:27017/Users";
const Port = 8080;


app.use(cors())

app.use(bodyParser.json())


app.use(express.urlencoded({ extended: true }));

app.use(express.json())


// app.use((req,res,next)=>{                            //middleware
// 	console.log(req.path, req.method)
// 	next();
// })

app.use('/', userRoutes)

mongoose.connect(dbUrl)
	.then(()=> console.log("db connected"))
	.catch(()=> console.log("db connection failed"));

app.listen(Port, () =>console.log(`listening on port ${Port}`))



