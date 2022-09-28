import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserDto } from '../user/dto/user.dto';
import { StudentAnswerDto } from './dto/student_answer.dto';

@Injectable()
export class StudentAnswersService {
  constructor(private prisma: PrismaService) {}
  async create(createStudentAnswerDto: StudentAnswerDto, user: UserDto) {
    const findUser = await this.prisma.users.findFirst({
      where: {
        id: user.id,
      },
    });
    const createAnswer = await this.prisma.student_answers.create({
      data: {
        ...createStudentAnswerDto,
        usersId: findUser.id,
      },
    });

    const verifyCorret = await this.prisma.answers.findMany({
      where: { asksId: createStudentAnswerDto.asksId },
    });
    const findCorrect = verifyCorret.find((item) => item.is_correct);

    const getUserScore = await this.prisma.student_score.findFirst({
      where: {
        id: findUser.student_scoreId,
      },
    });

    if (findCorrect.id == createStudentAnswerDto.title) {
      await this.prisma.student_score.update({
        where: {
          id: findUser.student_scoreId,
        },
        data: {
          score: getUserScore.score + 1,
        },
      });
    }
    return createAnswer;
  }

  async findAll() {
    return await this.prisma.student_answers.findMany();
  }

  async findByAskId(askId: string) {
    return await this.prisma.student_answers.findMany({
      where: { asksId: askId },
    });
  }

  async findOne(id: string) {
    return await this.prisma.student_answers.findFirst({
      where: { id },
    });
  }
}
