import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import { StudentScoreService } from './student_score.service';

import { UpdateStudentScoreDto } from './dto/update-student_score.dto';

@Controller('student-score')
export class StudentScoreController {
  constructor(private readonly studentScoreService: StudentScoreService) {}

  @Get()
  findAll() {
    return this.studentScoreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentScoreService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStudentScoreDto: UpdateStudentScoreDto,
  ) {
    return this.studentScoreService.update(id, updateStudentScoreDto);
  }
}
