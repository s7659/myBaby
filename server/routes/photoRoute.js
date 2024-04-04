const express=require("express")
const router=express.Router()

const photoController=require("../controller/photoController")
router.get("/",photoController.getAllPhotos)
router.get("/:_id",photoController.getPhotoById)
router.post("/",photoController.createNewPhoto)
router.put("/:_id",photoController.updatePhoto)
router.delete("/:_id",photoController.deletePhoto)
module.exports=router