import express from "express";
import dotenv from "dotenv";
import { chatHistoryAnalyzer } from "./llm/client";
import { conversation } from "./internal/conversation";
import { Conversation } from "./internal/types";
// import fs from "fs";
// Load environment variables
dotenv.config({ path: ".env" });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World");
});

app.post("/analyze", async (req: express.Request, res: express.Response) => {
  if (!req.body.conversation || req.body.conversation.length === 0) {
    res.status(400).json({
      data: null,
      success: false,
      error: "No conversation provided",
    });

    return;
  }

  const result = await chatHistoryAnalyzer(
    req.body.conversation as Conversation[]
  );

  res.json({
    data: result,
    success: true,
  });
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
