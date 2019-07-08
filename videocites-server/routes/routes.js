import express from "express";
import postController from "../controllers/videoLogController";
const router = express.Router();
router.get("/api/v1/posts", postController.getVideoLog);

export default router;