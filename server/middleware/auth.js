// server/middleware/auth.js
import { getCookie } from "h3";

export default defineEventHandler(async (event) => {
  // Only run this middleware for API requests
  // And exclude auth-related API endpoints
  const url = event.node.req.url;
  if (!url.includes("api")) {
    return;
  } else if (url.includes("api/callback")) {
    return;
  } else if (url.includes("api/logout")) {
    return;
  } else if (url.includes("api/login")) {
    return;
  } else if (url.includes("api/register")) {
    return;
  }

  const sessionCookie = getCookie(event, "kinde");
  if (!sessionCookie) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized: No session cookie found",
    });
  }

  const kinde = event.context.kinde;
  if (kinde) {
    const isAuthenticated = await kinde.isAuthenticated();
    if (!isAuthenticated) {
      throw createError({
        statusCode: 401,
        statusMessage: "Unauthorized: Kinde session cookie not found",
      });
    }
  } else {
    console.log("No Kinde instance found");
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized: No Kinde instance found",
    });
  }
});
