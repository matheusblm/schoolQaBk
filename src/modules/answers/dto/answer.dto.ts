import { IsBoolean, IsString } from 'class-validator';

export class AnswerDto {
  id?: string;
  @IsString()
  title: string;
  @IsBoolean()
  is_correct: boolean;
  @IsString()
  asksId: string;
}
