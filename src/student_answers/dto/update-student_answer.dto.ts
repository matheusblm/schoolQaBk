import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentAnswerDto } from './create-student_answer.dto';

export class UpdateStudentAnswerDto extends PartialType(CreateStudentAnswerDto) {}
