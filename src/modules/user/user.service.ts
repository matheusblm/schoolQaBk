import { BadRequestException, Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { PrismaService } from 'src/database/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUser: UserDto, professor: boolean) {
    const userExist = await this.prisma.users.findFirst({
      where: {
        email: createUser.email,
      },
    });

    if (userExist) {
      throw new BadRequestException('Usuário já cadastrado');
    }

    const userWithPassword = {
      ...createUser,
      password: await bcrypt.hash(createUser.password, 10),
    };

    const createdUser = await this.prisma.users.create({
      data: {
        ...userWithPassword,
        student_score: { create: { score: 0 } },
        is_Professor: professor,
      },
    });

    return { ...createdUser, password: undefined };
  }

  async findAll() {
    return await this.prisma.users.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.users.findFirst({
      where: { id },
    });
  }
}
