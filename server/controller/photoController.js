const Photo = require("../models/Photo");

const getAllPhotos=async(req,res)=>{
    const photos=await Photo.find().lean()
    // if (!photos?.length){
    //     return res.status(400).json({message:"no photos found"})
    // }
    res.json(photos)
}

const createNewPhoto=async(req,res)=>{
    const{title,imageUrl}=req.body
    if(!title){
        return res.status(404).json({message:'title is required'})
    }
    const photo=await Photo.create({title,imageUrl})
    if(title)
    {
        return res.status(201).json({message:'New photo created'})
    } 
    else{
        return res.status(400).json({message:'Invalid photo'})}
}

const getPhotoById=async(req,res)=>{
    const{_id}=req.params
    const photo=await Photo.findById(_id).lean()
    if(!photo){
        return res.status(400).json({message:"no photo found"})
    }
    res.json(photo)
}

const updatePhoto=async(req,res)=>{
    const{_id}=req.params
    const {title,imageUrl}=req.body
    if(!_id||!title){
        return res.status(400).json({message:'fields are required'})
    }
    const photo=await Photo.findById(_id).exec()
    if(!photo){
        return res.status(400).json({message:"photo not found"})
    }
    photo.title=title
    photo.imageUrl=imageUrl

    const updatePost=await photo.save()
    res.send(`${updatePost.title} update`)
}
const deletePhoto=async(req,res)=>{
    const{_id}=req.params
    const photo=await Photo.findById(_id)
    // if(!photo){
    //     return res.status(400).json({message:"photo is not found"})
    // }
    await photo.deleteOne()
    const reply=(`Photo: ${photo.title}, id: ${photo._id} deleted`)
    res.json(reply)
}
module.exports={getAllPhotos,createNewPhoto,getPhotoById,updatePhoto,deletePhoto}