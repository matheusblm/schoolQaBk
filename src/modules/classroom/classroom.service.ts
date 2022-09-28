import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserDto } from '../user/dto/user.dto';
import { ClassroomDto } from './dto/classroom.dto';
import { update_ClassroomDto } from './dto/update_ClassroomDto.dto';

@Injectable()
export class ClassroomService {
  constructor(private prisma: PrismaService) {}

  async create(createClassroomDto: ClassroomDto) {
    return this.prisma.classrooms.create({
      data: createClassroomDto,
    });
  }

  async findAll() {
    return await this.prisma.classrooms.findMany({ include: { Users: true } });
  }

  async findByUser(user: UserDto) {
    const findUser = await this.prisma.users.findFirst({
      where: { id: user.id },
    });
    return await this.prisma.classrooms.findMany({
      where: { id: findUser.classroomsId },
      include: { Users: true },
    });
  }

  async findOne(id: string) {
    return await this.prisma.classrooms.findFirst({
      where: { id },
      include: { Users: true },
    });
  }

  async update(id: string, updateClassroomDto: update_ClassroomDto) {
    return await this.prisma.classrooms.update({
      where: { id },
      data: {
        ...updateClassroomDto,
      },
    });
  }
}
