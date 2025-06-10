import { EasyInputMessage } from "openai/resources/responses/responses";
import { Conversation } from "./types";

export const formatConversation = (
  conversation: Conversation[]
): EasyInputMessage[] => {
  return conversation.map((message) => ({
    role: message.role,
    content: message.content,
  }));
};
