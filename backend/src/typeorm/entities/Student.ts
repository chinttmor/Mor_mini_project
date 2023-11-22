// studentId	tinyint PK
// 	name	varchar(45)
// 	email	varchar(45)
// 	password	varchar(45)
// 	phone	varchar(45)

import { Column, Entity, PrimaryGeneratedColumn, } from "typeorm";

@Entity({name:'Student'})
export class Student{
    @PrimaryGeneratedColumn({type:'tinyint'})
    studentId : number;
    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    phone : string;
}