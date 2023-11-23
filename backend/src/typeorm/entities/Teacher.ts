import { Column, Entity, OneToMany, PrimaryGeneratedColumn, } from "typeorm";
import { Course } from "./Course";

@Entity({name:'Teacher'})
export class Teacher{
    @PrimaryGeneratedColumn({type:'tinyint'})
    teacherId : number;
    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    phone : string;
    @Column()
    zone : string;
    @OneToMany(()=> Course, (course)=>course.teacherId)
    course: Course[];
}