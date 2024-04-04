const Todo=require("../models/Todo");

const getAllTodos=async(req,res)=>{
    const todos=await Todo.find().lean()
    // if (!todos?.length){
    //     return res.status(400).json({message:"no todos found"})
    // }
    res.json(todos)
}

const createNewTodo=async(req,res)=>{
    const{title,tags,completed}=req.body
    if(!title){
        return res.status(404).json({message:'title is required'})
    }
    const todo=await Todo.create({title,tags,completed})
    if(title)
    {
        return res.status(201).json({message:'New todo created'})
    } 
    else{
        return res.status(400).json({message:'Invalid todo'})}
}

const getTodoById=async(req,res)=>{
    const{_id}=req.params
    const todo=await Todo.findById(_id).lean()
    if(!todo){
        return res.status(400).json({message:"no todo found"})
    }
    res.json(todo)
}

const updateTodo=async(req,res)=>{
    const{_id}=req.params
    const {title,tags,completed}=req.body
    if(!_id||!title){
        return res.status(400).json({message:'fields are required'})
    }
    const todo=await Todo.findById(_id).exec()
    if(!todo){
        return res.status(400).json({message:"todo not found"})
    }
    todo.title=title
    todo.tags=tags,
    todo.completed=completed

    const updateTodo=await todo.save()
    res.send(`${updateTodo.title} update`)
}

const updateCompleteTodo=async(req,res)=>{
    const {_id}=req.params
    if(!_id){
        return res.status(400).json({message:'fields are required'})
    }
    const todo=await Todo.findById(_id).exec()
    if(!todo){
        return res.status(400).json({message:"todo not found"})
    }
    todo.completed=!todo.completed

    const updateCompleteTodo=await todo.save()
    res.send(`${updateCompleteTodo.title} update`)
}

const deleteTodo=async(req,res)=>{
    const{_id}=req.params
    const todo=await Todo.findById(_id)
    // if(!todo){
    //     return res.status(400).json({message:"todo is not found"})
    // }
    await todo.deleteOne()
    const reply=(`Todo: ${todo.title}, id: ${todo._id} deleted`)
    res.json(reply)
}

module.exports={getAllTodos,createNewTodo,getTodoById,updateTodo,deleteTodo,updateCompleteTodo}
