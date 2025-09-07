import express from "express";
const router = express.Router();
import multer from 'multer'
import { generateCaptionController } from "../controllers/caption.controller.js";

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

router.post(
    '/',
    upload.single('image'),
    generateCaptionController
)


export default router;