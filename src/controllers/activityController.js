// controllers/activityController.js
import { sql } from "../config/db.js";

// 🔹 Utility function (called directly in other controllers)
export async function createActivity(userId, action, details) {
  try {
    await sql`
      INSERT INTO activities (user_id, action, details)
      VALUES (${userId}, ${action}, ${details})
    `;
  } catch (error) {
    console.error("Error logging activity:", error);
  }
}

// 🔹 Route handler (GET /api/activities/:userId)
export async function getActivitiesByUser(req, res) {
  try {
    const { userId } = req.params;

    const activities = await sql`
      SELECT * FROM activities WHERE user_id = ${userId} ORDER BY created_at DESC
    `;

    res.status(200).json(activities);
  } catch (error) {
    console.error("Error fetching activities:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
