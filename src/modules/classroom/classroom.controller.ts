import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { UserDto } from '../user/dto/user.dto';
import { ClassroomService } from './classroom.service';
import { ClassroomDto } from './dto/classroom.dto';
import { update_ClassroomDto } from './dto/update_ClassroomDto.dto';

@Controller('classroom')
export class ClassroomController {
  constructor(private readonly classroomService: ClassroomService) {}

  @Post()
  create(@Body() createClassroomDto: ClassroomDto) {
    return this.classroomService.create(createClassroomDto);
  }

  @Get()
  findAll() {
    return this.classroomService.findAll();
  }

  @Get('/student')
  findByStudent(@CurrentUser() user: UserDto) {
    return this.classroomService.findByUser(user);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.classroomService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateClassroomDto: update_ClassroomDto,
  ) {
    return this.classroomService.update(id, updateClassroomDto);
  }
}
