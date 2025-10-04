// controllers/activityController.js
import { sql } from "../config/db.js";

export async function getActivitiesByUserId(req, res) {
  try {
    const { userId } = req.params;

    const activities = await sql`
      SELECT * FROM activities WHERE user_id = ${userId} ORDER BY created_at DESC
    `;

    res.status(200).json(activities);
  } catch (error) {
    console.error("Error getting activities", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// helper function to log activities
export async function createActivity(user_id, action, details = null) {
  try {
    await sql`
      INSERT INTO activities(user_id, action, details)
      VALUES (${user_id}, ${action}, ${details})
    `;
  } catch (error) {
    console.error("Error creating activity", error);
  }
}
