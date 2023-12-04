import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStudentDTO } from 'src/student/dto/CreateStudent.dto';
import { StudentService } from 'src/student/student/student.service';
import { Student } from 'src/typeorm/entities/Student';
import { Teacher } from 'src/typeorm/entities/Teacher';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject(StudentService) private readonly studentService: StudentService,
    @Inject(JwtService) private jwtService: JwtService,
  ) {}
// Sign in 
  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.studentService.findbyEmail(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.studentId, username: user.name };
    return {
      access_token: await this.jwtService.signAsync(payload),
    }
    }
// Register
  async register(createUser: CreateStudentDTO) {}
}
