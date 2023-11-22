// studentId	tinyint PK
// 	courseId	tinyint
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Student_list' })
export class Student_list {
  @PrimaryGeneratedColumn({ type: 'tinyint' })
  studentId: number;
  @Column({ type: 'tinyint' })
  courseId: number;
}
