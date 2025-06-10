import express from "express";
import dotenv from "dotenv";
import { chatHistoryAnalyzer } from "./llm/client";
import { conversation } from "./internal/conversation";
// import fs from "fs";
// Load environment variables
dotenv.config({ path: ".env" });

const app = express();

app.get("/", async (req: express.Request, res: express.Response) => {
  const result = await chatHistoryAnalyzer(conversation);

  res.send(result);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Handle graceful shutdown
process.on("SIGINT", () => {
  console.info("Received SIGINT, shutting down gracefully...");
  process.exit(0);
});

process.on("SIGTERM", () => {
  console.info("Received SIGTERM, shutting down gracefully...");
  process.exit(0);
});

// Start the application
// main().catch((error) => {
//   console.error("Unhandled error:", error);
//   process.exit(1);
// });
