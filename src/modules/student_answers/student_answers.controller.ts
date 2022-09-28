import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { UserDto } from '../user/dto/user.dto';
import { StudentAnswerDto } from './dto/student_answer.dto';
import { StudentAnswersService } from './student_answers.service';

@Controller('student_answers')
export class StudentAnswersController {
  constructor(private readonly studentAnswersService: StudentAnswersService) {}

  @Post()
  create(
    @Body() createStudentAnswerDto: StudentAnswerDto,
    @CurrentUser() user: UserDto,
  ) {
    return this.studentAnswersService.create(createStudentAnswerDto, user);
  }

  @Get()
  findAll() {
    return this.studentAnswersService.findAll();
  }

  @Get('ask/:askId')
  findByAsk(@Param('askId') askId: string) {
    return this.studentAnswersService.findByAskId(askId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentAnswersService.findOne(id);
  }
}
