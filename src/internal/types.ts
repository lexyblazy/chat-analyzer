export interface Conversation {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
  structuredOutput?: any;
}
