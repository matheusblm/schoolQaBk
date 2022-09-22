import { Module } from '@nestjs/common';
import { AskService } from './ask.service';
import { AskController } from './ask.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [AskController],
  providers: [AskService, PrismaService],
})
export class AskModule {}
