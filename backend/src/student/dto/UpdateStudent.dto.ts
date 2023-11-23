import { CreateStudentDTO } from "./CreateStudent.dto";
import {PartialType} from "@nestjs/mapped-types"

export class UpdateStudentDTO extends PartialType(CreateStudentDTO)
{

}