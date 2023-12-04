import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  findCoursebyId(id: number) {
    return this.courseRepo
      .createQueryBuilder('course')
      .innerJoin('course.teacher', 'teacher')
      .addSelect(['teacher.name', 'teacher.zone'])
      .where('course.courseId = :id', { id })
      .getOneOrFail();
  }
  async createCourse(createCourse: CreateCourseDTO, teacherId: number) :Promise<Course> {
    const courseTeacher: Teacher = await this.teacherRepo.findOne({
      where: { teacherId: teacherId },
    });
    if (!courseTeacher) {
      throw new HttpException('Teacher doesnt exist', HttpStatus.BAD_REQUEST);
    }
    // return courseTeacher
    const newcourse= this.courseRepo.create
    ({
      courseId: createCourse.courseId,
      courseName: createCourse.courseName,
      courseDescription: createCourse.courseDescription,
      teacher: courseTeacher
    });
    return this.courseRepo.save(newcourse)
  }
}
