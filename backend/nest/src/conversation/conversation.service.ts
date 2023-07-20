import { Injectable } from "@nestjs/common";

import { Reply } from "./interfaces/reply.interface";

@Injectable()
export class ConversationService {
  public async interact(
    diagramID: string,
    userID: string,
    message: string,
  ): Promise<Reply[]> {
    return [
      {
        type: "text",
        text: "Hello, world!",
      },
    ];
  }
}
