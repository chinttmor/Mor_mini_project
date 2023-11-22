// examId	tinyint PK
// studentId	tinyint
// quizId	tinyint
// answer	json
import { Column, Entity, PrimaryGeneratedColumn, } from "typeorm";

@Entity({name:'Exam_answer'})
export class Exam_answer{
    @PrimaryGeneratedColumn({type:'tinyint'})
    examId : number;
    @Column({type:'tinyint'})
    studentId : number;
    @Column({type:'tinyint'})
    quizId : number;
    @Column()
    createTime: string;
}