import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { chatHistoryAnalyzer } from "./llm/client";
import { Conversation } from "./internal/types";

dotenv.config({ path: ".env" });

const PORT = process.env["PORT"] || 4770;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
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
