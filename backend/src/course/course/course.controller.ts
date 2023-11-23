import { Controller } from '@nestjs/common';
import { CourseService } from './course.service';
import {
  Body,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Req,
  Delete,
  UsePipes,
  ValidationPipe,
  NotFoundException,
} from '@nestjs/common';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  //Find by id
  @Get(':id')
  async getStudentbyId(@Param('id') id: number) {
    const course = await this.courseService.findCoursebyId(id);
    //  if(!course){
    //      throw new NotFoundException('Cant find course by the id: '+ id );
    //  }
    return course;
  }
}
