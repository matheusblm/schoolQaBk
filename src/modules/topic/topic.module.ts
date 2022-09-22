import { Module } from '@nestjs/common';
import { TopicService } from './topic.service';
import { TopicController } from './topic.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [TopicController],
  providers: [TopicService, PrismaService],
})
export class TopicModule {}
