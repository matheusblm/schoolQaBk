import { Module } from '@nestjs/common';
import { StudentScoreService } from './student_score.service';
import { StudentScoreController } from './student_score.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [StudentScoreController],
  providers: [StudentScoreService, PrismaService],
})
export class StudentScoreModule {}
