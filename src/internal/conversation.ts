import { Conversation } from "./types";

export const conversation: Conversation[] = [
  {
    id: "c8847b66-695f-4172-86c4-376898bec94b",
    role: "user",
    content: "Buy 100$ of eth",
    timestamp: 1747675504219,
  },
  {
    id: "3535ea17-1e4c-4ea3-92b5-5258f1b4bb8b",
    role: "assistant",
    content:
      "Alright, you want to buy $100 worth of ETH. First, I need to know which network you want your ETH on. Please select the network for your ETH purchase.",
    timestamp: 1747675504219,
  },
  {
    id: "e42b613c-786c-4035-9aee-04275f2dd5d0",
    role: "user",
    content: "Ethereum",
    timestamp: 1747675512119,
  },
  {
    id: "4bd2f1f8-839a-4d79-aa1e-0a0428a8d7be",
    role: "assistant",
    content:
      "How would you like to pay for your ETH on Ethereum? Please choose your payment option.",
    timestamp: 1747675512119,
  },
];
