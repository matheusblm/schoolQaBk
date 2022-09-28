import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { AskDto } from './dto/ask.dto';

@Injectable()
export class AskService {
  constructor(private prisma: PrismaService) {}
  async create(createAskDto: AskDto) {
    return await this.prisma.asks.create({
      data: {
        ...createAskDto,
        answers: { create: createAskDto.answers },
      },
      include: { answers: true },
    });
  }

  async findAll() {
    return await this.prisma.asks.findMany();
  }
  async findLast() {
    const findAsks = await this.prisma.asks.findMany({
      include: { Student_answers: true, answers: true, Users: true },
    });

    return findAsks[findAsks.length - 1];
  }
  async findOne(id: string) {
    return await this.prisma.asks.findFirst({ where: { id } });
  }
}
