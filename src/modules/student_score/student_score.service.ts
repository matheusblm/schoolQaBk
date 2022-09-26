import { Injectable } from '@nestjs/common';
import { StudentScoreDto } from './dto/student_score.dto';
import { UpdateStudentScoreDto } from './dto/update-student_score.dto';

@Injectable()
export class StudentScoreService {
  create(createStudentScoreDto: StudentScoreDto) {
    return 'This action adds a new studentScore';
  }

  findAll() {
    return `This action returns all studentScore`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentScore`;
  }

  update(id: number, updateStudentScoreDto: UpdateStudentScoreDto) {
    return `This action updates a #${id} studentScore`;
  }
}
