import { Conversation } from "./types";

export const formatConversation = (conversation: Conversation[]): string => {
  return JSON.stringify(
    conversation.map((message) => ({
      role: message.role,
      content: message.content,
    }))
  );
};
