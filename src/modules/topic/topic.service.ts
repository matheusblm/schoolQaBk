import { Injectable } from '@nestjs/common';
import { TopicDto } from './dto/create-topic.dto';

@Injectable()
export class TopicService {
  create(createTopicDto: TopicDto) {
    return 'This action adds a new topic';
  }

  findAll() {
    return `This action returns all topic`;
  }

  findOne(id: number) {
    return `This action returns a #${id} topic`;
  }
}
