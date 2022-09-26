import { IsNotEmpty, IsString } from 'class-validator';
import { AnswerDto } from 'src/modules/answers/dto/answer.dto';
import { UserDto } from 'src/modules/user/dto/user.dto';

export class AskDto {
  id?: string;
  @IsString()
  title: string;
  @IsString()
  @IsNotEmpty()
  topicsId: string;
  users?: UserDto[];
  answers?: AnswerDto[];
}
