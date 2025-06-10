import dotenv from "dotenv";
import { chatHistoryAnalyzer } from "./llm/client";
import { conversation } from "./internal/conversation";
import fs from "fs";
// Load environment variables
dotenv.config({ path: ".env" });

async function main(): Promise<void> {
  const response = await chatHistoryAnalyzer(conversation);
  fs.writeFileSync(
    `responses/${Date.now()}.json`,
    JSON.stringify(response.output, null, 2)
  );
}

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
main().catch((error) => {
  console.error("Unhandled error:", error);
  process.exit(1);
});
