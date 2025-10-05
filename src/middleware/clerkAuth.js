import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

// This middleware protects a route and injects req.auth
export const requireAuth = ClerkExpressRequireAuth();
