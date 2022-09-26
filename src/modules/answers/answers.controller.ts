import { Controller, Get, Post, Body } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { AnswerDto } from './dto/answer.dto';

@Controller('answers')
export class AnswersController {
  constructor(private readonly answersService: AnswersService) {}

  @Post()
  create(@Body() createAnswerDto: AnswerDto) {
    return this.answersService.create(createAnswerDto);
  }

  @Get()
  findAll() {
    return this.answersService.findAll();
  }
}
