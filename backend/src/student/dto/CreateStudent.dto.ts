import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateStudentDTO {
  @IsNumber()
  @IsNotEmpty()
  studentId: number;
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name: string;
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(50)
  email: string;
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  password: string;
  @IsNotEmpty()
  @MaxLength(10)
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
