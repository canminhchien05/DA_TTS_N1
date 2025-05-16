import express from "express";
import * as postController from "../controllers/postController.js";

const router = express.Router();

router.get("/", postController.getAll);
router.post("/", postController.create);

export default router;
