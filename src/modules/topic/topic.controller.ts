import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { TopicDto } from './dto/topic.dto';
import { UpdateTopicDto } from './dto/update_topic.dto';
import { TopicService } from './topic.service';

@Controller('topic')
export class TopicController {
  constructor(private readonly topicService: TopicService) {}

  @Post()
  create(@Body() createTopicDto: TopicDto) {
    return this.topicService.create(createTopicDto);
  }

  @Get()
  findAll() {
    return this.topicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.topicService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTopic: UpdateTopicDto) {
    return this.topicService.update(id, updateTopic);
  }
}
