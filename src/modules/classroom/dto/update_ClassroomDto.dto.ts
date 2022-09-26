import { TopicDto } from 'src/modules/topic/dto/topic.dto';
import { UserDto } from 'src/modules/user/dto/user.dto';

export class update_ClassroomDto {
  title?: string;
  topics: TopicDto[];
  users?: UserDto[];
}
