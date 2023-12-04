import { type } from "os";
import { z } from "zod";

export const Quizschema = z.object({
    quizId:z.number(),
    content: z.object({
    question: z.string(),
    A: z.string(),
    B: z.string(),
    C: z.string(),
    D: z.string(),
    answer: z.string()}),
    createDate:z.string(),
    teacherId:z.number(),
    examId:z.number()
    
})
 export type QuizType = z.infer<typeof Quizschema>
//  @PrimaryGeneratedColumn({ type: 'tinyint' })
//  quizId: number;
//  @Column('simple-json', { nullable: false })
//  content: {
//    question: string;
//    A: string;
//    B: string;
//    C: string;
//    D: string;
//    answer: string;
//  };
//  @Column()
//  createDate: number;
//  @Column({ type: 'tinyint' })
//  teacherId: number;
//  @Column({ type: 'tinyint' })
//  examId: number;