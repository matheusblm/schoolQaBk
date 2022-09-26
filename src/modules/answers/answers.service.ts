import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { AnswerDto } from './dto/answer.dto';

@Injectable()
export class AnswersService {
  constructor(private prisma: PrismaService) {}

  async create(createAnswerDto: AnswerDto) {
    return await this.prisma.answers.create({
      data: { ...createAnswerDto },
    });
  }

  async findAll() {
    return await this.prisma.answers.findMany();
  }
}
