//import
const express = require('express')
const { postTodo, updateTodo, deleteTodo, getTodo } = require( '../Controllers/todoController' )
const router = express.Router()


// const getUserData = require("../Controllers/userController")

// //create
// router.get("/home", getUserData)


//send
router.post('/posttodo/:todo',postTodo)

//update
router.put('/updatetodo/:id/:updatedtodo',updateTodo)

//delete
router.delete('/deletetodo/:id',deleteTodo)

//fetch data
router.get('/gettodo',getTodo)

//export
module.exports = router