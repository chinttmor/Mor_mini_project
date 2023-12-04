import { Controller, UseGuards } from '@nestjs/common';
import { Body, Get, Param, ParseIntPipe, Patch, Post, Put, Req ,Delete, UsePipes, ValidationPipe, NotFoundException} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateStudentDTO } from 'src/student/dto/CreateStudent.dto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}
  @Post('login')
  signIn(@Body() signInDto: CreateStudentDTO) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  // console.log('ok')
  }

  @UseGuards(AuthGuard)
  @Get('test')
  getProfile(@Req() req) {
    return 'ok';
  }
}
