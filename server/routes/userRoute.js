const express=require("express")
const router=express.Router()

const userController=require("../controller/userController")
router.get("/",userController.getAllUsers)
router.get("/:_id",userController.getUsereById)
router.post("/",userController.createNewUser)
router.put("/:_id",userController.updateUser)
router.delete("/:_id",userController.deleteUser)

module.exports=router