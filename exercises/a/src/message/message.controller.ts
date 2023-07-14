import { Body, Controller, Get, Post, Query } from "@nestjs/common";

import { SendMessageRequestDTO } from "./dtos/send-message-request.dto";
import { GetMessageResponseDTO } from "./dtos/get-message-response.dto";
import { SendMessageResponseDTO } from "./dtos/send-message-response.dto";

@Controller('message')
export class MessageController {
  @Post()
  async sendMessage(@Body() body: SendMessageRequestDTO): Promise<SendMessageResponseDTO> {
    return {
      messages: [
        {
          message: 'Got: ' + body.message,
          type: 'bot',
          timestamp: new Date().valueOf()
        }
      ]
    }
  }

  @Get()
  async getMessages(@Query('userID') userID: string): Promise<GetMessageResponseDTO> {
    return {
      messages: [
        {
          message: 'hello',
          timestamp: new Date().valueOf(),
          type: 'human',
          userID: '123'
        },
        {
          message: 'test',
          timestamp: new Date().valueOf(),
          type: 'bot',
        },
      ]
    }
  }
}
