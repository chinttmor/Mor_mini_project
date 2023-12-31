import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Put, Req ,Delete, UsePipes, ValidationPipe, NotFoundException} from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDTO } from '../dto/CreateStudent.dto';
import { Request } from 'express';
import { UpdateStudentDTO } from '../dto/UpdateStudent.dto'
import { HttpStatus } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService){

    }
    //Pagination 
    @Get('?')
    async getAllStudent(@Req() req: Request){
        const page = parseInt(req.query.page as any) || 0;
        const limit = parseInt(req.query.limit as any) || 5;
        const student = await this.studentService.findAllStudent(page,limit);
        return student;
     }
     //Find by id
    @Get(':id')
    async getStudentbyId(@Param('id') id: number){
        const student = await this.studentService.findStudentbyId(id);
        if(!student[0]&&student.length==0){
            throw new NotFoundException('Cant find student by the id: '+ id );
        }
        return student;
    }
    //Crete new one
    @Post()
    @UsePipes(new ValidationPipe)
    async createStudent(@Body() studentDetails: CreateStudentDTO){
        this.studentService.createStudent(studentDetails);
    }
    //Update one
    @Patch(':id')
    @UsePipes(new ValidationPipe)
    async updateStudentbyId(
        @Param('id',ParseIntPipe) id: number,
        @Body() studentNewDetails: UpdateStudentDTO){
        const updateStudent = await this.studentService.changeStudentDetails(id,studentNewDetails)
        return updateStudent
    }
    //Delete one
    @Delete(':id')
    async delStudentbyId(@Param('id') id: number){
        const student = await this.studentService.delStudentbyId(id);
        return student;
    }
}
