import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from '../../typeorm/entities/Course';
import { Teacher } from '../../typeorm/entities/Teacher';
import { CreateCourseDTO } from '../dto/CreateCourse.dto';

// import { CreateStudentDTO } from '../dto/CreateStudent.dto';
// import { UpdateStudentDTO } from '../dto/UpdateStudent.dto';
@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course) private courseRepo: Repository<Course>,
    @InjectRepository(Teacher) private teacherRepo: Repository<Teacher>,
  ) {}

  //find teacher
  findteacher(id: number) {
    return this.teacherRepo.findOne({ where: { teacherId: id } });
  }
  findCoursebyId(id: number) {
    return this.courseRepo
    .createQueryBuilder("course")
    .where("course.courseId = :id",{id})
    .getOneOrFail()
  }
//   findCourseTeacher(){

//   }
  createCourse(createCourse: CreateCourseDTO, teacherId) {}
}
