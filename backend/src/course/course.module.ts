import { Module } from '@nestjs/common';
import { CourseService } from './course/course.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/typeorm/entities/Course';
import { Teacher } from 'src/typeorm/entities/Teacher';
import { CourseController } from './course/course.controller';

@Module({
  imports:[TypeOrmModule.forFeature([Course,Teacher])],
  controllers: [CourseController],
  providers: [CourseService]
})
export class CourseModule {}
