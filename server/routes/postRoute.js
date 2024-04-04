const express=require("express")
const router=express.Router()

const postController=require("../controller/postController")
router.get("/",postController.getAllPosts)
router.get("/:_id",postController.getPostById)
router.post("/",postController.createNewPost)
router.put("/:_id",postController.updatePost)
router.delete("/:_id",postController.deletePost)

module.exports=router