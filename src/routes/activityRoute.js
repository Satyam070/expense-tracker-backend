// routes/activityRoute.js
import express from "express";
import { getActivitiesByUserId } from "../controllers/activityController.js";

const router = express.Router();

router.get("/:userId", getActivitiesByUserId);

export default router;
