const Post = require("../models/Post");

const getAllPosts=async(req,res)=>{
    const posts=await Post.find().lean()
    // if (!posts?.length){
    //     return res.status(400).json({message:"no posts found"})
    // }
    res.json(posts)
}

const createNewPost=async(req,res)=>{
    const{title,body1}=req.body
    if(!title){
        return res.status(404).json({message:'title is required'})
    }
    const post=await Post.create({title,body1})
    if(title)
    {
        return res.status(201).json({message:'New post created'})
    } 
   
    else{
        return res.status(400).json({message:'Invalid post'})}
}

const getPostById=async(req,res)=>{
    const{_id}=req.params
    const post=await Post.findById(_id).lean()
    if(!post){
        return res.status(400).json({message:"no post found"})
    }
    res.json(post)
}

const updatePost=async(req,res)=>{
    const{_id}=req.params
    const {title,body1}=req.body
    if(!_id||!title){
        return res.status(400).json({message:'fields are required'})
    }
    const post=await Post.findById(_id).exec()
    if(!post){
        return res.status(400).json({message:"post not found"})
    } 
    post.title=title
    post.body1=body1
    const updatePost=await post.save()
    res.send(`${updatePost.title} update`)
}


const deletePost=async(req,res)=>{
    const{_id}=req.params
    const post=await Post.findById(_id)
    // if(!post){
    //     return res.status(400).json({message:"post is not found"})
    // }
    await post.deleteOne()
    const reply=(`Post: ${post.name}, id: ${post._id} deleted`)
    res.json(reply)
}

module.exports={getAllPosts,createNewPost,getPostById,updatePost,deletePost}