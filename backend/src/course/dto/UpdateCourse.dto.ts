import { CreateCourseDTO } from "./CreateCourse.dto";
import {PartialType} from "@nestjs/mapped-types"

export class UpdateCorseDTO extends PartialType(CreateCourseDTO)
{

}