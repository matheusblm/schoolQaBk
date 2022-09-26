import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  id?: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password?: string;

  is_Professor?: boolean;

  student_answersId?: string;

  student_score: {
    score: number;
  };
}
