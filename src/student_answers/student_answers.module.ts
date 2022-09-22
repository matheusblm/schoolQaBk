import { Module } from '@nestjs/common';
import { StudentAnswersService } from './student_answers.service';
import { StudentAnswersController } from './student_answers.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [StudentAnswersController],
  providers: [StudentAnswersService, PrismaService],
})
export class StudentAnswersModule {}
