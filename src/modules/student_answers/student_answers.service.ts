import { Injectable } from '@nestjs/common';
import { StudentAnswerDto } from './dto/student_answer.dto';

@Injectable()
export class StudentAnswersService {
  create(createStudentAnswerDto: StudentAnswerDto) {
    return 'This action adds a new studentAnswer';
  }

  findAll() {
    return `This action returns all studentAnswers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentAnswer`;
  }
}
