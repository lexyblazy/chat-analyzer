import { Conversation } from "./types";

export const formatConversation = (conversation: Conversation[]): string => {
  return JSON.stringify(
    conversation.map((message) => ({
      role: message.role,
      content: message.content,
    }))
  );
};

export const formatKeywords = (keywords: string) => {
  return keywords
    .split("\n")
    .map((keyword) => keyword.replace(/^"|"$/g, ""))
    .filter((keyword) => keyword !== "")
    .map((keyword) => {
      return {
        value: keyword,
        count: Math.floor(Math.random() * 1000),
        type: keyword.split(" ").length > 1 ? "phrase" : "word",
        trend: ["up", "down", "stable"][Math.floor(Math.random() * 3)],
      };
    });
};
