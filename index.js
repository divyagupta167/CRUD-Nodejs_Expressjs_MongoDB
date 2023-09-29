// initialize the project using npm init
// create index.js file
// require express module and create a server object with it
// use get method to handle request for root route '/'
// send response 'Hello World' as text/plain content type
// start the app using node index.js
// start your node app by running command: nodemon (nodemon is an extension of Node that automatically restarts your application when you change any source code
// start your node application by running command "nodemon" in terminal or cmd

// importing express
const express = require("express");

// create our app w/ express
const app = express();

//to handle json data
app.use(express.json());
app.use(express.urlencoded({extended:true}))



// USING DOTENV 
require('dotenv').config()

// create api, we can create api in index.js file  but it is not a good practice, so we created 2 folders routers and controllers to separate the logic  and for clear code understanding

// //api that gives us some data using GET method
// app.get("/home", (req, res) => {
//     // we can send simple string or we can even send objects
//     let user ={
//         name: "<NAME>",
//         age:"20 years old",
//     }
//   res.send(user);
// });


// create api with userRouter
const userRouter  = require('./Router/userRouter')

app.use(userRouter)

//connecting to the mongodb database
const dataBase= require("./database")

dataBase()
app.use(userRouter) 








//start listening to port to start a server
app.listen(3000,()=>{
    console.log('server started on 127.0.0.1:3000');
}); //port number 8080




