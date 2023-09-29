const Todo = require("../Models/TodoSchema");


//create
const postTodo = async (req, res) => {
  try {
    const success = await Todo.create({ todo: req.params.todo });
    if (success) {
      res.status(200).send({ message: "Todo created...." });
    } else {
      res.status(400).send({ message: "Error creating todo..." });
    }
  } catch (error) {
    console.log(error);
  }
};
//update
const updateTodo = async (req, res) => {
  try {
    const success = await Todo.findByIdAndUpdate(req.params.id,{todo:req.params.updatedtodo})
    if (success) {
      res.status(200).send({ message: "Todo updated...." });
    } else {
      res.status(400).send({ message: "Error updated todo..." });
    }
  } catch (error) {
    console.log(error);
  }
};
//delete
const deleteTodo = async (req, res) => {
    try {
      const success = await Todo.findByIdAndDelete(req.params.id)
      if (success) {
        res.status(200).send({ message: "Todo deleted...." });
      } else {
        res.status(400).send({ message: "Error deleting todo..." });
      }
    } catch (error) {
      console.log(error);
    }
  };

  //fetch data from database
const getTodo = async (req, res) => {
    try {
      const success = await Todo.find()
      if (success) {
        res.status(200).send({success, message: "you are viewing all todos" });
      } else {
        res.status(400).send({ message: "Error fetching todo..." });
      }
    } catch (error) {
      console.log(error);
    }
  };

module.exports = { postTodo , updateTodo , deleteTodo ,getTodo};
