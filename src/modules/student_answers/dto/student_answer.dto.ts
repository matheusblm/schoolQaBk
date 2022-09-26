import { UserDto } from 'src/modules/user/dto/user.dto';

export class StudentAnswerDto {
  id?: string;
  title: string;
  is_correct: boolean;
  asksId: string;
  users?: UserDto;
}
