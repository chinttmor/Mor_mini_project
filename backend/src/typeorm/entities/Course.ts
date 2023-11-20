import { Column, Entity, PrimaryGeneratedColumn, } from "typeorm";

@Entity({name:'Course'})
export class Course{
    @PrimaryGeneratedColumn({type:'tinyint'})
    courseId : number;
    @Column()
    courseName: string;
    @Column()
    courseDescription: string;
    @Column({type:'tinyint'})
    teacherId : number;
}