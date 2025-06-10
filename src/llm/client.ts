import OpenAI from "openai";
import { prompt } from "./prompt";
import { formatConversation } from "../internal/utils";
import { Conversation } from "../internal/types";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export const client = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
});

interface ChatHistoryAnalyzerResponse {
  user_intent: string;
  agent_understanding: string;
  task_completion: string;
  user_sentiment: string;
  disengagement: {
    did_disengage: boolean;
    reason: string;
  };
  agent_improvement_recommendations: string;
  expected_steps: number;
  actual_steps: number;
}

export const chatHistoryAnalyzer = async (
  conversation: Conversation[]
): Promise<ChatHistoryAnalyzerResponse> => {
  const response = await client.chat.completions.create({
    model: "gpt-4.1",
    messages: [
      {
        role: "system",
        content: prompt,
      },
      {
        role: "user",
        content: JSON.stringify(
          `Analyze this conversation: ${formatConversation(conversation)}`
        ),
      },
    ],
    response_format: {
      type: "json_object",
    },
  });

  if (!response.choices[0]?.message?.content) {
    throw new Error("No content returned from the model");
  }

  return JSON.parse(response.choices[0].message.content);
};
