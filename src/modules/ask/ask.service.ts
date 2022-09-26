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
      },
    });
  }

  async findAll() {
    return await this.prisma.asks.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.asks.findFirst({ where: { id } });
  }
}
