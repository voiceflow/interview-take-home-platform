import { Message } from "../interfaces/message.interface"

export type InteractRequestDTO = {
  userID: string;
  message: Message;
}
