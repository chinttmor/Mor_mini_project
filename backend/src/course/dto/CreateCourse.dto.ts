// @PrimaryGeneratedColumn({type:'tinyint'})
//     courseId : number;
//     @Column()
//     courseName: string;
//     @Column()
//     courseDescription: string;
//     // @Column({type:'tinyint'})
//     // teacherId : number;
//     @ManyToOne(()=>Teacher, (teacher)=>teacher.teacherId)
//     teacherId = Teacher;

import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';

export class CreateCourseDTO {
  @PrimaryGeneratedColumn()
  @IsNumber()
  @IsNotEmpty()
  courseId: number;
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  coursename: string;
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  courseDescription: string;
//   @IsNumber()
//   @IsNotEmpty()
//   teacherId: number;
}
