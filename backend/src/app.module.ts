import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { Student } from './typeorm/entities/Student';
import { Course } from './typeorm/entities/Course';
import { Exam } from './typeorm/entities/Exam';
import { Exam_answer } from './typeorm/entities/Exam_answer';
import { Quiz } from './typeorm/entities/Quiz';
import { Student_list } from './typeorm/entities/Student_list';
import { Teacher } from './typeorm/entities/Teacher';
import { CourseModule } from './course/course.module';
import { RouterModule } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
// import { UsersModule } from './users/users.module';
// import { UserController } from './user/user.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'thaochi1110',
      database: 'custom',
      entities: [
        Student,
        Exam,
        Course,
        Exam_answer,
        Quiz,
        Student_list,
        Teacher,
      ],
      synchronize: false,
    }),
    StudentModule,
    CourseModule,
    AuthModule,
    // UsersModule,
    // RouterModule.register([
    //   { path: 'student', module: StudentModule },
    //   { path: 'course', module: CourseModule , children:[
    //     {
    //       path: 'exam',
    //       module: ExamModule
    //     },
    //     {
    //       path: 'student-list',
    //       module: StudentListModule
    //     }
    //   ]},
    // ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
