import { Injectable } from "@nestjs/common";
import { Message } from "./interfaces/message.interface";
import { Reply } from "./interfaces/reply.interface";

@Injectable()
export class ConversationService {
  public async interact(userID: string, message: Message): Promise<Reply[]> {
    return [
      {
        type: 'text',
        text: 'Hello, world!',
      }
    ]
  }
}
