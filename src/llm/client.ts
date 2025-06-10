import OpenAI from "openai";
import { prompt } from "./prompt";
import { formatConversation } from "../internal/utils";
import { Conversation } from "../internal/types";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export const client = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
});

export const chatHistoryAnalyzer = (conversation: Conversation[]) => {
  return client.responses.create({
    model: "gpt-4o-mini",
    instructions: prompt,
    input: formatConversation(conversation),
  });
};
