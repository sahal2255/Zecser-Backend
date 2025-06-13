import { Router } from "express";
import { addProfileDetails } from "../controllers/profile.controller";
import { authenticate } from "../middlewares/auth.middleware";
import upload from "../helpers/multer";
const router =Router()

router.post('/user/profile/addprofile',upload.single('imageFile'),authenticate,addProfileDetails)

export default router