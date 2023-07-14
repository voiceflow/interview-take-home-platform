export type MessageDTO = {
  message: string;
  timestamp: number;
} & (
  | { type: 'human', userID: string }
  | { type: 'bot' }
)
