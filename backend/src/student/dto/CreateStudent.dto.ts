import { isEmail, isNotEmpty, isNumber, isString } from 'class-validator';

export class CreateStudentDTO {
  studentId: number;
  name: string;
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
