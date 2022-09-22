import { Injectable } from '@nestjs/common';
import { CreateStudentAnswerDto } from './dto/create-student_answer.dto';
import { UpdateStudentAnswerDto } from './dto/update-student_answer.dto';

@Injectable()
export class StudentAnswersService {
  create(createStudentAnswerDto: CreateStudentAnswerDto) {
    return 'This action adds a new studentAnswer';
  }

  findAll() {
    return `This action returns all studentAnswers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentAnswer`;
  }

  update(id: number, updateStudentAnswerDto: UpdateStudentAnswerDto) {
    return `This action updates a #${id} studentAnswer`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentAnswer`;
  }
}
