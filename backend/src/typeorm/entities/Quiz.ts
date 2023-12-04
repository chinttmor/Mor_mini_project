// quizId	tinyint PK
// 	content	json
// 	createDate	char(5)
// 	teacherId	tinyint
// 	examId	tinyint

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Quiz' })
export class Quiz {
  @PrimaryGeneratedColumn({ type: 'tinyint' })
  quizId: number;
  @Column('simple-json', { nullable: false })
  content: {
    question: string;
    A: string;
    B: string;
    C: string;
    D: string;
    answer: string;
  };
  @Column()
  createDate: number;
  @Column({ type: 'tinyint' })
  teacherId: number;
  @Column({ type: 'tinyint' })
  examId: number;
}
