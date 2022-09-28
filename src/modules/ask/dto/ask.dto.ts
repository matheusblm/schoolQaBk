import { IsNotEmpty, IsString } from 'class-validator';
import { AnswerDto } from 'src/modules/answers/dto/answer.dto';

export class AskDto {
  id?: string;
  @IsString()
  title: string;
  @IsString()
  @IsNotEmpty()
  topicsId: string;
  usersId?: string;
  @IsNotEmpty()
  answers: AnswerDto[];
}
