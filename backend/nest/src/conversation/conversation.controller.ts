import { Body, Controller, Post } from "@nestjs/common";

import { ConversationService } from "./conversation.service";
import { InteractRequestDTO } from "./dtos/interact-request.dto";
import { InteractResponseDTO } from "./dtos/interact-response.dto";

@Controller('conversation')
export class ConversationController {
  constructor(
    private readonly messageService: ConversationService,
  ) {}

  @Post(':diagramID')
  async interaction(@Body() body: InteractRequestDTO): Promise<InteractResponseDTO> {
    const reply = await this.messageService.interact(body.userID, body.message);
    return {
      reply
    }
  }
}
