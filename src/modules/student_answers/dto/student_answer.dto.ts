import { IsBoolean, IsString } from 'class-validator';
import { UserDto } from 'src/modules/user/dto/user.dto';

export class StudentAnswerDto {
  id?: string;
  @IsString()
  title: string;
  @IsBoolean()
  is_correct: boolean;
  @IsString()
  asksId: string;
  users?: UserDto;
}
