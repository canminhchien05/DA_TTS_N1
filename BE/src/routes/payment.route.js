import express from "express";
import * as paymentController from "../controllers/paymentController.js";

const router = express.Router();

router.get("/", paymentController.getAll);
router.post("/", paymentController.create);

export default router;
