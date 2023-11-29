import { Module } from '@nestjs/common';
import { StudentController } from './student/student.controller';
import { StudentService } from './student/student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/typeorm/entities/Student';

@Module({
  imports:[TypeOrmModule.forFeature([Student])],
  controllers: [StudentController],
  providers: [StudentService],
  exports:[StudentService]
})
export class StudentModule {}