import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { ClassroomModule } from './modules/classroom/classroom.module';
import { TopicModule } from './modules/topic/topic.module';
import { StudentScoreModule } from './modules/student_score/student_score.module';
import { AskModule } from './modules/ask/ask.module';
import { AnswersModule } from './modules/answers/answers.module';
import { StudentAnswersModule } from './modules/student_answers/student_answers.module';

@Module({
  imports: [
    UserModule,
    ClassroomModule,
    TopicModule,
    StudentScoreModule,
    AskModule,
    AnswersModule,
    StudentAnswersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
