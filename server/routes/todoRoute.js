const express=require("express")
const router=express.Router()

const todoController=require("../controller/todoController")
router.get("/",todoController.getAllTodos)
router.get("/:_id",todoController.getTodoById)
router.post("/",todoController.createNewTodo)
router.put("/:_id",todoController.updateTodo)
router.put("/Complete/:_id",todoController.updateCompleteTodo)
router.delete("/:_id",todoController.deleteTodo)

module.exports=router