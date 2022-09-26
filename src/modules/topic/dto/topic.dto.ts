import { IsNotEmpty, IsString } from 'class-validator';
import { AskDto } from 'src/modules/ask/dto/ask.dto';

export class TopicDto {
  id?: string;
  @IsString()
  @IsNotEmpty()
  title: string;
  asks?: AskDto[];
  @IsString()
  @IsNotEmpty()
  classroomsId: string;
}
