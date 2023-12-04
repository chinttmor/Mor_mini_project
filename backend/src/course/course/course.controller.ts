import { Controller, UseGuards } from '@nestjs/common';
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
import { CreateCourseDTO } from '../dto/CreateCourse.dto';
import { Quiz } from 'src/decorators/quiz.decorator';
import { AuthGuard } from 'src/auth/auth.guard';
@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  //Find by id
  @Get(':id')
  async findCoursebyId(@Param('id') id: number) {
    const course = await this.courseService.findCoursebyId(id);
    //  if(!course){
    //      throw new NotFoundException('Cant find course by the id: '+ id );
    //  }
    return course;
  }
  @UseGuards(AuthGuard)
  @Post(':id')
  @UsePipes(new ValidationPipe)
  async createCourse(@Body() createCourse: CreateCourseDTO, @Param('id') teacherId: number){
    console.log(createCourse,teacherId)
    const newCourse= await this.courseService.createCourse(createCourse,teacherId);
    return newCourse;
  }
  // @Post('/test')
  // async test(@Quiz() quiz: QuizType){
  //   console.log(quiz)
  // }
}
