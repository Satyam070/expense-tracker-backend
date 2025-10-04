// routes/activityRoute.js
import express from "express";
import { getActivitiesByUser } from "../controllers/activityController.js";

const router = express.Router();

// GET all activities for a user
router.get("/:userId", getActivitiesByUser);

export default router;
