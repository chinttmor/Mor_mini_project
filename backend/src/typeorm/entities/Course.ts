import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, } from "typeorm";
import { Teacher } from "./Teacher";

@Entity({name:'Course'})
export class Course{
    @PrimaryGeneratedColumn({type:'tinyint'})
    courseId : number;
    @Column()
    courseName: string;
    @Column()
    courseDescription: string;
    // @Column({type:'tinyint'})
    // teacherId : number;
    @ManyToOne(()=> Teacher,(teacher)=> teacher.courses)
    @JoinColumn({name: 'teacherId'})
    teacher = Teacher;
}