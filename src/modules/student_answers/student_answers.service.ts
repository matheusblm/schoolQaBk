import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { StudentAnswerDto } from './dto/student_answer.dto';

@Injectable()
export class StudentAnswersService {
  constructor(private prisma: PrismaService) {}
  async create(createStudentAnswerDto: StudentAnswerDto) {
    return await this.prisma.student_answers.create({
      data: {
        ...createStudentAnswerDto,
      },
    });
  }

  async findAll() {
    return await this.prisma.student_answers.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.student_answers.findFirst({
      where: { id },
    });
  }
}
