import express from "express";
import postController from "../controllers/videoLogController";
const router = express.Router();
router.get("/api/v1/posts", postController.getVideoLog);
router.get("/api/v1/posts/:start/:length", postController.getVideoLogItems);

export default router;
module.exports = router;