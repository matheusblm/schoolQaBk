import { Injectable } from '@nestjs/common';
import { AnswerDto } from './dto/answer.dto';

@Injectable()
export class AnswersService {
  create(createAnswerDto: AnswerDto) {
    return 'This action adds a new answer';
  }

  findAll() {
    return `This action returns all answers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} answer`;
  }
}
