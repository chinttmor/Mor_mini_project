import { Column, Entity, PrimaryGeneratedColumn, } from "typeorm";

@Entity({name:'Exam'})
export class Course{
    @PrimaryGeneratedColumn({type:'tinyint'})
    examId : number;
    @Column()
    tilte: string;
    @Column({type:'tinyint'})
    total_mark : number;
    @Column({type:'tinyint'})
    total_time : number;
    @Column()
    createTime: string;
    @Column({type:'tinyint'})
    courseId : number;
    @Column({type:'tinyint'})
    teacherId : number;
}