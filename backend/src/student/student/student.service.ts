import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from '../../typeorm/entities/Student';
import { CreateStudentDTO } from '../dto/CreateStudent.dto';
import { UpdateStudentDTO } from '../dto/UpdateStudent.dto';
@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepo: Repository<Student>,
  ) {}

  findStudentbyId(id: number) {
    return this.studentRepo.find({
      select: {
        // studentId: true,
        // name: true,
      },
      where: {
        studentId: id,
      },
    });
  }

  findbyEmail(email: string) {
    return this.studentRepo.findOne({
      where: {
        email: email,
      },
    });
  }

  createStudent(studentDetails: CreateStudentDTO) {
    console.log(studentDetails);
    const newStudent = this.studentRepo.create({ ...studentDetails });
    this.studentRepo.save(newStudent);
  }

  changeStudentDetails(id: number, studentNewDetails: UpdateStudentDTO) {
    return this.studentRepo.update(id, { ...studentNewDetails });
  }

  delStudentbyId(id: number) {
    return this.studentRepo.delete(id);
  }

  findAllStudent(page: number, limit: number) {
    return this.studentRepo.findAndCount({
      order: {
        studentId: 'ASC'
    },
    skip: page,
    take: limit
    })
  }
}
