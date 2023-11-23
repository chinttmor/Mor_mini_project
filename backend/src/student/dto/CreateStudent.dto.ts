import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateStudentDTO {
  @IsNumber()
  studentId: number;
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  password: string;
  phone: string;
}
// @PrimaryGeneratedColumn({type:'tinyint'})
// studentId : number;
// @Column()
// name: string;
// @Column()
// email: string;
// @Column()
// password: string;
// @Column()
// phone : string;
// }
