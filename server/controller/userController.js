const User=require("../models/User");

const getAllUsers=async(req,res)=>{
    const users=await User.find().lean()
   
    res.json(users)
}

const createNewUser=async(req,res)=>{
    const{name,username,address,email,phone}=req.body
    if(!name){
        return res.status(404).json({message:'name is required'})
    }
    const user=await User.create({name,username,address,email,phone})
    if(name)
    {
        return res.status(201).json({message:'New user created'})
    } 

    else{
        return res.status(400).json({message:'Invalid user'})}
}
const getUsereById=async(req,res)=>{
    const{_id}=req.params
    const user=await User.findById(_id).lean()
    if(!user){
        return res.status(400).json({message:"no user found"})
    }  
    res.json(user)
}

const updateUser=async(req,res)=>{
    const{_id}=req.params
    const {name,username,address,email,phone}=req.body
    if(!_id||!name){
        return res.status(400).json({message:'fields are required'})
    }
    const user=await User.findById(_id).exec()
    if(!user){
        return res.status(400).json({message:"user not found"})
    }
    
    user.name=name,
    user.username=username,
    user.address=address,
    user.email=email,
    user.phone=phone
    
    const updateUser=await user.save()
    res.send(`${updateUser.name} update`)
}

const deleteUser=async(req,res)=>{
    const{_id}=req.params
    const user=await User.findById(_id)
    await user.deleteOne()
    const reply=(`User: ${user.name}, id: ${user._id} deleted`)
    res.json(reply)
}

module.exports={getAllUsers,createNewUser,getUsereById,updateUser,deleteUser}

