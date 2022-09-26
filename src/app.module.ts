import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { ClassroomModule } from './modules/classroom/classroom.module';
import { TopicModule } from './modules/topic/topic.module';
import { StudentScoreModule } from './modules/student_score/student_score.module';
import { AskModule } from './modules/ask/ask.module';
import { AnswersModule } from './modules/answers/answers.module';
import { StudentAnswersModule } from './modules/student_answers/student_answers.module';
import { AuthModule } from './modules/auth/auth.module';
import { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ClassroomModule,
    TopicModule,
    StudentScoreModule,
    AskModule,
    AnswersModule,
    StudentAnswersModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
