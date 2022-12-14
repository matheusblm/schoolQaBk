import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserDto } from '../user/dto/user.dto';
import { TopicDto } from './dto/topic.dto';
import { UpdateTopicDto } from './dto/update_topic.dto';

@Injectable()
export class TopicService {
  constructor(private prisma: PrismaService) {}
  async create(createTopicDto: TopicDto) {
    return await this.prisma.topics.create({
      data: { ...createTopicDto },
    });
  }

  async findAll() {
    return await this.prisma.topics.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.topics.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateTopic: UpdateTopicDto) {
    return await this.prisma.topics.update({
      where: {
        id,
      },
      data: {
        ...updateTopic,
      },
    });
  }

  async findByUsers(user: UserDto) {
    const findUser = await this.prisma.users.findFirst({
      where: { id: user.id },
    });

    const findTopics = await this.prisma.topics.findMany({
      where: { classroomsId: findUser.classroomsId },
    });
    return findTopics;
  }
}
