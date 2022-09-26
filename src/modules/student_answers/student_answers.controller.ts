import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StudentAnswerDto } from './dto/student_answer.dto';
import { StudentAnswersService } from './student_answers.service';

@Controller('student_answers')
export class StudentAnswersController {
  constructor(private readonly studentAnswersService: StudentAnswersService) {}

  @Post()
  create(@Body() createStudentAnswerDto: StudentAnswerDto) {
    return this.studentAnswersService.create(createStudentAnswerDto);
  }

  @Get()
  findAll() {
    return this.studentAnswersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentAnswersService.findOne(id);
  }
}
