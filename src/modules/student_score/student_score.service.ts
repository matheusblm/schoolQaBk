import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateStudentScoreDto } from './dto/update-student_score.dto';

@Injectable()
export class StudentScoreService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.student_score.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.student_score.findFirst({
      where: { id },
    });
  }

  async update(id: string, updateStudentScoreDto: UpdateStudentScoreDto) {
    return await this.prisma.student_score.update({
      where: { id },
      data: { ...updateStudentScoreDto },
    });
  }
}
