import { Column, Entity, PrimaryGeneratedColumn, } from "typeorm";

@Entity({name:'Teacher'})
export class Teacher{
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
    @Column()
    zone : string;
}