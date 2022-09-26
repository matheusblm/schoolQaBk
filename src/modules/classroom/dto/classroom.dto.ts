import { IsNotEmpty, IsString } from 'class-validator';
import { TopicDto } from 'src/modules/topic/dto/topic.dto';
import { UserDto } from 'src/modules/user/dto/user.dto';

export class ClassroomDto {
  id?: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  topics: TopicDto[];
  users?: UserDto[];
}
