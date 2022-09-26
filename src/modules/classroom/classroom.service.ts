import { Injectable } from '@nestjs/common';
import { ClassroomDto } from './dto/classroom.dto';
import { update_ClassroomDto } from './dto/update_ClassroomDto.dto';

@Injectable()
export class ClassroomService {
  create(createClassroomDto: ClassroomDto) {
    return 'This action adds a new classroom';
  }

  findAll() {
    return `This action returns all classroom`;
  }

  findOne(id: number) {
    return `This action returns a #${id} classroom`;
  }

  update(id: number, updateClassroomDto: update_ClassroomDto) {
    return `This action updates a #${id} classroom`;
  }
}
