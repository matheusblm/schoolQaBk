import { Module } from '@nestjs/common';
import { ClassroomService } from './classroom.service';
import { ClassroomController } from './classroom.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [ClassroomController],
  providers: [ClassroomService, PrismaService],
})
export class ClassroomModule {}
